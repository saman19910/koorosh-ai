// lib/replicate.ts
export async function generateLogoImage(prompt: string): Promise<string | null> {
  const res = await fetch("/api/logo-image", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ prompt }),
  });

  const data = await res.json();
  return data.imageUrl;
}
