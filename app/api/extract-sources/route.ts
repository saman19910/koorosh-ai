import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { topic } = await req.json();

  const apiKey = process.env.RAPIDAPI_KEY!;
  const response = await fetch(`https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/WebSearchAPI?q=${encodeURIComponent(topic)}&pageNumber=1&pageSize=5&autoCorrect=true`, {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': apiKey,
      'X-RapidAPI-Host': 'contextualwebsearch-websearch-v1.p.rapidapi.com',
    },
  });

  const data = await response.json();

  const sources = data.value.map((item: any) => ({
    title: item.title,
    url: item.url,
  }));

  return NextResponse.json({ sources });
}
