// app/api/translate/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { ChatOpenAI } from '@langchain/openai';
import { ChatPromptTemplate } from '@langchain/core/prompts';
import { StringOutputParser } from '@langchain/core/output_parsers';

export async function POST(req: NextRequest) {
  try {
    const { text, from, to } = await req.json();

    const prompt = ChatPromptTemplate.fromMessages([
      [
        'system',
        `You are a professional translator that fluently translates from {from} to {to}. Only return the translated text.`,
      ],
      ['human', '{text}'],
    ]);

    const model = new ChatOpenAI({
      modelName: 'mistralai/mistral-7b-instruct', // مدل متن‌باز واقعی روی OpenRouter یا لوکال
      temperature: 0.3,
      openAIApiKey: process.env.OPENROUTER_API_KEY,
      configuration: {
        baseURL: 'https://openrouter.ai/api/v1',
        defaultHeaders: {
          'HTTP-Referer': 'http://localhost:3000', // ← یا دامنه واقعی
          'X-Title': 'KooroshAI Translate',
        },
      },
    });

    const chain = prompt.pipe(model).pipe(new StringOutputParser());
    const result = await chain.invoke({ text, from, to });

    return NextResponse.json({ result });
  } catch (err) {
    console.error('Translation error:', err);
    return NextResponse.json({ result: '❌ خطا در ترجمه' }, { status: 500 });
  }
}
