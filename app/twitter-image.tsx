import { ImageResponse } from "next/og";

export const alt = "Tobías Tarnowski — Conecto. Automatizo. Resuelvo.";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#0b0b0b",
          padding: "80px",
          fontFamily: "sans-serif",
          color: "#f8f7f2",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          <div
            style={{
              fontSize: "24px",
              fontWeight: 800,
              letterSpacing: "-0.04em",
              textTransform: "uppercase",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <span>TOBÍAS TARNOWSKI</span>
            <span
              style={{
                color: "#ff5a36",
                fontSize: "18px",
              }}
            >
              ®
            </span>
          </div>
          <div
            style={{
              fontFamily: "monospace",
              fontSize: "14px",
              letterSpacing: "0.08em",
              color: "#ff5a36",
              backgroundColor: "rgba(255, 90, 54, 0.12)",
              padding: "8px 16px",
              borderRadius: "0px",
              textTransform: "uppercase",
            }}
          >
            PORTFOLIO 2026
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "12px",
          }}
        >
          <div
            style={{
              fontSize: "72px",
              fontWeight: 900,
              lineHeight: 0.9,
              letterSpacing: "-0.05em",
              textTransform: "uppercase",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span>CONECTO.</span>
            <span style={{ color: "#ff5a36" }}>AUTOMATIZO.</span>
            <span>RESUELVO.</span>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            borderTop: "1px solid rgba(255, 255, 255, 0.2)",
            paddingTop: "32px",
          }}
        >
          <div
            style={{
              fontSize: "22px",
              color: "rgba(248, 247, 242, 0.8)",
              maxWidth: "600px",
              lineHeight: 1.3,
            }}
          >
            Sistemas, automatización con n8n, inteligencia artificial, redes y hardware.
          </div>
          <div
            style={{
              fontFamily: "monospace",
              fontSize: "14px",
              letterSpacing: "0.06em",
              color: "rgba(248, 247, 242, 0.6)",
              textTransform: "uppercase",
            }}
          >
            POSADAS, MISIONES, AR
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
