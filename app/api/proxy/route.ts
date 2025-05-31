// در `/app/api/proxy/route.ts`
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const res = await fetch("https://extensions.aitopia.ai/ai/prompts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      // سایر هدرها
    },
    body: JSON.stringify(body),
  });

  const data = await res.json();
  return NextResponse.json(data);
}
