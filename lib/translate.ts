// lib/translate.ts
import axios from "axios";

export async function translateText(text: string, from: string, to: string): Promise<string> {
  try {
    const response = await axios.post("https://libretranslate.de/translate", {
      q: text,
      source: from,
      target: to,
      format: "text"
    }, {
      headers: {
        "Content-Type": "application/json"
      }
    });

    return response.data.translatedText;
  } catch (error) {
    console.error("Translation error:", error);
    throw new Error("خطا در ترجمه");
  }
}
