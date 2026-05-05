import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { companyDetails } from "@/lib/site";

type ContactPayload = {
  name?: string;
  company?: string;
  email?: string;
  phone?: string;
  service?: string;
  message?: string;
  website?: string;
  turnstileToken?: string;
};

function clean(value: string | undefined) {
  return (value ?? "").trim();
}

function requireEnv(name: string) {
  const value = process.env[name];

  if (!value) {
    throw new Error(`Missing environment variable: ${name}`);
  }

  return value;
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload;

    if (clean(body.website)) {
      return NextResponse.json({ ok: true });
    }

    const payload = {
      name: clean(body.name),
      company: clean(body.company),
      email: clean(body.email),
      phone: clean(body.phone),
      service: clean(body.service),
      message: clean(body.message),
      turnstileToken: clean(body.turnstileToken)
    };

    if (!payload.name || !payload.email || !payload.service || !payload.message) {
      return NextResponse.json(
        { ok: false, error: "Please complete the required form fields." },
        { status: 400 }
      );
    }

    if (process.env.TURNSTILE_SECRET_KEY) {
      if (!payload.turnstileToken) {
        return NextResponse.json(
          { ok: false, error: "Please complete the verification check." },
          { status: 400 }
        );
      }

      const forwardedFor = request.headers.get("x-forwarded-for") ?? "";
      const remoteIp = forwardedFor.split(",")[0]?.trim();
      const verificationBody = new URLSearchParams({
        secret: process.env.TURNSTILE_SECRET_KEY,
        response: payload.turnstileToken
      });

      if (remoteIp) {
        verificationBody.set("remoteip", remoteIp);
      }

      const verificationResponse = await fetch(
        "https://challenges.cloudflare.com/turnstile/v0/siteverify",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          },
          body: verificationBody.toString()
        }
      );

      const verificationResult = (await verificationResponse.json()) as {
        success?: boolean;
        "error-codes"?: string[];
      };

      if (!verificationResult.success) {
        console.error("Turnstile verification failed", verificationResult["error-codes"]);
        return NextResponse.json(
          { ok: false, error: "Verification failed. Please try again." },
          { status: 400 }
        );
      }
    }

    const transport = nodemailer.createTransport({
      host: requireEnv("SMTP_HOST"),
      port: Number(process.env.SMTP_PORT ?? "587"),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: requireEnv("SMTP_USER"),
        pass: requireEnv("SMTP_PASS")
      }
    });

    const recipient = process.env.CONTACT_TO_EMAIL ?? companyDetails.email;
    const fromAddress = process.env.SMTP_FROM ?? process.env.SMTP_USER ?? companyDetails.email;
    const fromName = "EuroLinq Website";

    await transport.sendMail({
      to: recipient,
      from: `${fromName} <${fromAddress}>`,
      sender: fromAddress,
      replyTo: payload.email,
      subject: `Website enquiry from ${payload.name} | ${payload.service}`,
      headers: {
        "X-Auto-Response-Suppress": "All",
        "X-Entity-Ref-ID": `${Date.now()}-${payload.email}`
      },
      text: [
        "New website enquiry received via eurolinq-partners.com",
        "",
        `Name: ${payload.name}`,
        `Company: ${payload.company || "-"}`,
        `Email: ${payload.email}`,
        `Phone: ${payload.phone || "-"}`,
        `Service: ${payload.service}`,
        "",
        "Message:",
        payload.message
      ].join("\n"),
      html: `
        <h2>New website enquiry</h2>
        <p>This message was submitted through the EuroLinq website contact form.</p>
        <p><strong>Name:</strong> ${payload.name}</p>
        <p><strong>Company:</strong> ${payload.company || "-"}</p>
        <p><strong>Email:</strong> ${payload.email}</p>
        <p><strong>Phone:</strong> ${payload.phone || "-"}</p>
        <p><strong>Service:</strong> ${payload.service}</p>
        <p><strong>Message:</strong></p>
        <p>${payload.message.replace(/\n/g, "<br />")}</p>
      `
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact form delivery failed", error);

    return NextResponse.json(
      { ok: false, error: "Unable to send enquiry at this time." },
      { status: 500 }
    );
  }
}
