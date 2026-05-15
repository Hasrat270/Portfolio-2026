import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default async function Icon() {
  const fontData = await fetch(
    // Caveat — handwritten Google Font, weight 700 (bold).
    "https://fonts.googleapis.com/css2?family=Caveat:wght@700&display=swap",
  )
    .then((res) => res.text())
    .then((css) => {
      const url = css.match(/src: url\((.+?)\) format/)?.[1];
      return url ? fetch(url).then((r) => r.arrayBuffer()) : null;
    });

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#a04527",
          color: "#fbf9f4",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 28,
          fontWeight: 700,
          fontFamily: "Caveat, cursive",
          paddingBottom: 2,
          borderRadius: 6,
        }}
      >
        H
      </div>
    ),
    {
      ...size,
      fonts: fontData
        ? [{ name: "Caveat", data: fontData, style: "normal", weight: 700 }]
        : undefined,
    },
  );
}
