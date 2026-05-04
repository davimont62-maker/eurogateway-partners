import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = {
  width: 1200,
  height: 630
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          height: "100%",
          width: "100%",
          background:
            "linear-gradient(135deg, #f7f8fb 0%, #f7f3e8 42%, #edf3fa 100%)",
          color: "#1f2a37",
          fontFamily: "Arial, sans-serif",
          position: "relative",
          overflow: "hidden"
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at top right, rgba(198,154,74,0.14), transparent 34%), radial-gradient(circle at bottom left, rgba(32,74,130,0.12), transparent 36%)"
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            padding: "64px 72px",
            position: "relative"
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 110,
                height: 110,
                borderRadius: 28,
                backgroundColor: "#ffffff",
                boxShadow: "0 18px 45px rgba(31,42,55,0.08)"
              }}
            >
              <div
                style={{
                  width: 54,
                  height: 54,
                  borderRadius: 18,
                  border: "12px solid #102846",
                  transform: "rotate(-45deg)",
                  borderRightColor: "#c69a4a",
                  borderTopColor: "#c69a4a"
                }}
              />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <div style={{ fontSize: 64, fontWeight: 700, letterSpacing: "-0.05em" }}>
                EuroLinq
              </div>
              <div
                style={{
                  fontSize: 20,
                  letterSpacing: "0.36em",
                  textTransform: "uppercase",
                  color: "#526581"
                }}
              >
                Your European Market Access Partner
              </div>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 22, maxWidth: 900 }}>
            <div
              style={{
                display: "flex",
                alignSelf: "flex-start",
                padding: "12px 22px",
                borderRadius: 999,
                border: "1px solid rgba(198,154,74,0.55)",
                backgroundColor: "rgba(255,255,255,0.82)",
                color: "#b38325",
                fontSize: 20,
                fontWeight: 600
              }}
            >
              UK-based market access advisory
            </div>
            <div style={{ fontSize: 64, lineHeight: 1.05, fontWeight: 700, letterSpacing: "-0.06em" }}>
              Helping non-EU manufacturers build a credible commercial presence in Europe.
            </div>
          </div>

          <div style={{ display: "flex", gap: 18 }}>
            {["Representation", "Coordination", "European interface"].map((item) => (
              <div
                key={item}
                style={{
                  display: "flex",
                  padding: "14px 22px",
                  borderRadius: 999,
                  backgroundColor: "#102846",
                  color: "#ffffff",
                  fontSize: 20
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    size
  );
}
