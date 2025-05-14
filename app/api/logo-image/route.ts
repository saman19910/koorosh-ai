// app/api/logo-image/route.ts
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { prompt } = await req.json();

  try {
    const response = await fetch("https://api.replicate.com/v1/predictions", {
      method: "POST",
      headers: {
        Authorization: `Token ${process.env.REPLICATE_API_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        version: "db21e45e52a6b6cf3f46b7f86d0c175dbe49eaa09d2c820c0f3555decc60c5c1", // Stable Diffusion 1.5
        input: {
          prompt,
          width: 512,
          height: 512,
        },
      }),
    });

    const data = await response.json();
    const image = data?.output?.[0] || null;

    return NextResponse.json({ imageUrl: image });
  } catch (error) {
    console.error("خطا در تولید تصویر:", error);
    return NextResponse.json({ imageUrl: null, error: "خطا در تولید تصویر رخ داد." });
  }
}
