interface LLMResponse {
  response: string;
}

export async function sendToLLM(prompt: string) {
  const res = await fetch('http://localhost:11434/api/generate', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      model: 'deepseek-coder:1.3b',
      prompt: `Revise this code:\n\n${prompt}`
    })
  });

  const data = (await res.json()) as LLMResponse;
  return data.response;
}
