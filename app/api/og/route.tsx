import { ImageResponse } from "next/og";
import type { NextRequest } from "next/server";

export const runtime = "nodejs";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const title = (searchParams.get("title") ?? "Reba Digital Solutions").slice(
    0,
    120
  );

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#f7f7f4",
          padding: "72px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            fontSize: 30,
            fontWeight: 700,
            color: "#101314",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 52,
              height: 52,
              borderRadius: 14,
              background: "#3155d9",
              color: "#fff",
              fontSize: 28,
            }}
          >
            r
          </div>
          <span>
            reba
            <span style={{ color: "#3155d9" }}>DIGITAL SOLUTIONS</span>
          </span>
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 58,
            lineHeight: 1.15,
            fontWeight: 600,
            color: "#101314",
            maxWidth: 980,
          }}
        >
          {title}
        </div>
        <div style={{ display: "flex", fontSize: 24, color: "#62695f" }}>
          rebadigitalsolutions.com
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
