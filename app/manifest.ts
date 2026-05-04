import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "EuroLinq",
    short_name: "EuroLinq",
    description:
      "European market access advisory and representation support for non-EU manufacturers.",
    start_url: "/",
    display: "standalone",
    background_color: "#f7f8fb",
    theme_color: "#102846",
    icons: [
      {
        src: "/eurolinq-mark.png",
        sizes: "512x512",
        type: "image/png"
      }
    ]
  };
}
