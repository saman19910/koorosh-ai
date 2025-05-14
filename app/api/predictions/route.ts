import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const { prompt } = await req.json();

  const response = await fetch('https://api.replicate.com/v1/predictions', {
    method: 'POST',
    headers: {
      'Authorization': `Token ${process.env.REPLICATE_API_TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      version: 'db21e45c-...-sdxl', // نسخه مدل Stable Diffusion XL
      input: { prompt },
    }),
  });

  const data = await response.json();
  return NextResponse.json(data);
}
