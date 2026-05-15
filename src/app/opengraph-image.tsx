import { ImageResponse } from "next/og";
import { SITE } from "@/lib/site";

export const alt = `${SITE.name} — ${SITE.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage() {
  const caveat = await fetch(
    "https://fonts.googleapis.com/css2?family=Caveat:wght@700&display=swap",
  )
    .then((res) => res.text())
    .then((css) => {
      const url = css.match(/src: url\((.+?)\) format/)?.[1];
      return url ? fetch(url).then((r) => r.arrayBuffer()) : null;
    });

  const host = SITE.url.replace(/^https?:\/\//, "").replace(/\/$/, "");

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#fbf9f4",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 40 }}>
          <div
            style={{
              width: 200,
              height: 200,
              background: "#a04527",
              color: "#fbf9f4",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 160,
              lineHeight: 1,
              fontWeight: 700,
              fontFamily: "Caveat, cursive",
              borderRadius: 28,
            }}
          >
            H
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <div
              style={{
                fontSize: 96,
                fontWeight: 700,
                color: "#1a1a1a",
                lineHeight: 1,
                letterSpacing: -2,
              }}
            >
              {SITE.name}
            </div>
            <div
              style={{
                fontSize: 44,
                color: "#6b6b6b",
                fontWeight: 400,
              }}
            >
              {SITE.role}
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            borderTop: "2px solid #e5e0d5",
            paddingTop: 32,
          }}
        >
          <div
            style={{
              fontSize: 32,
              color: "#6b6b6b",
              maxWidth: 720,
              lineHeight: 1.3,
            }}
          >
            MERN stack developer from Karachi — building modern web apps.
          </div>
          <div
            style={{
              fontSize: 32,
              color: "#a04527",
              fontWeight: 600,
            }}
          >
            {host}
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: caveat
        ? [{ name: "Caveat", data: caveat, style: "normal", weight: 700 }]
        : undefined,
    },
  );
}
