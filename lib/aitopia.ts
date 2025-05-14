// lib/aitopia.ts

export async function generateLogoImage(prompt: string): Promise<string | null> {
  try {
    const response = await fetch("https://api.replicate.com/v1/predictions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${process.env.REPLICATE_API_TOKEN}`,
      },
      body: JSON.stringify({
        version: "db21e45a3e7b61b5e6d60d032b5b62b635c94a6934d70f889e0b56e4a8f60caa", // نسخه یک مدل تولید تصویر مثل Stable Diffusion
        input: {
          prompt: prompt + ", طراحی لوگو با متن فارسی، ساده و حرفه‌ای",
          width: 512,
          height: 512,
          num_outputs: 1,
        },
      }),
    });

    const result = await response.json();

    if (result?.prediction?.output && result.prediction.output.length > 0) {
      return result.prediction.output[0];
    }

    console.error("پاسخ نامعتبر از Replicate:", result);
    return null;
  } catch (error) {
    console.error("خطا در تولید تصویر با هوش مصنوعی:", error);
    return null;
  }
}

