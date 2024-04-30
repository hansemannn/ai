import { openai } from '@ai-sdk/openai';
import { generateText } from 'ai';
import dotenv from 'dotenv';

dotenv.config();

async function main() {
  const result = await generateText({
    model: openai('gpt-4-vision-preview'),
    maxTokens: 512,
    messages: [
      {
        role: 'user',
        content: [
          { type: 'text', text: 'Describe the image in detail.' },
          {
            type: 'image',
            image: new URL(
              'https://github.com/vercel/ai/blob/main/examples/ai-core/data/comic-cat.png?raw=true',
            ),
          },
        ],
      },
    ],
  });

  console.log(result.text);
}

main().catch(console.error);
