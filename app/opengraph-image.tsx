import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Satya Sri — Senior Frontend Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "rgba(251, 243, 232, 1)",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          position: "relative",
          fontFamily: "serif",
        }}
      >
        {/* Lavender left strip */}
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: "14px",
            height: "100%",
            background: "#D8C9DE",
          }}
        />

        {/* Lavender bottom strip */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "48px",
            background: "#D8C9DE",
          }}
        />

        {/* Lavender circle decoration */}
        <div
          style={{
            position: "absolute",
            left: "36px",
            top: "60px",
            width: "320px",
            height: "320px",
            borderRadius: "50%",
            background: "#D8C9DE",
            opacity: 0.5,
          }}
        />

        {/* Text content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            paddingLeft: "420px",
            paddingRight: "80px",
          }}
        >
          <p
            style={{
              fontSize: "32px",
              color: "#1B3A6B",
              margin: "0 0 8px 0",
              fontWeight: 400,
            }}
          >
            Hello !
          </p>
          <h1
            style={{
              fontSize: "96px",
              color: "#1B3A6B",
              margin: "0 0 16px 0",
              fontWeight: 700,
              lineHeight: 1,
            }}
          >
            I&apos;m Satya Sri
          </h1>
          <h2
            style={{
              fontSize: "36px",
              color: "#1B3A6B",
              margin: "0 0 32px 0",
              fontWeight: 400,
            }}
          >
            Senior Frontend Engineer
          </h2>
          <p
            style={{
              fontSize: "24px",
              color: "#1B3A6B",
              margin: 0,
              lineHeight: 1.5,
              maxWidth: "560px",
            }}
          >
            Building scalable, accessible, and delightful web experiences.
          </p>
        </div>
      </div>
    ),
    { ...size }
  );
}
