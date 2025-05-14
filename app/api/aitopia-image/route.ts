// app/api/aitopia-image/route.ts
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { prompt } = await req.json();

  const replicateRes = await fetch("https://api.replicate.com/v1/predictions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token ${process.env.REPLICATE_API_TOKEN}`,
    },
    body: JSON.stringify({
      version: "a9758cbf0a4e8d979cf2a4cf90a3c412d31133fef75e56c66df2c8a2d6c1e181", // نسخه Stable Diffusion XL
      input: { prompt },
    }),
  });

  const prediction = await replicateRes.json();

  // منتظر می‌مونیم تا تصویر آماده شه (polling)
  let imageUrl = null;
  while (!imageUrl && prediction.status !== "failed") {
    const checkRes = await fetch(`https://api.replicate.com/v1/predictions/${prediction.id}`, {
      headers: {
        Authorization: `Token ${process.env.REPLICATE_API_TOKEN}`,
      },
    });
    const statusData = await checkRes.json();

    if (statusData.status === "succeeded") {
      imageUrl = statusData.output?.[0] || null;
    } else if (statusData.status === "failed") {
      break;
    }

    await new Promise((r) => setTimeout(r, 1500)); // کمی صبر کن
  }

  return NextResponse.json({ imageUrl });
}


