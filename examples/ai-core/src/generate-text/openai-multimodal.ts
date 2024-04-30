import { openai } from '@ai-sdk/openai';
import { generateText } from 'ai';
import dotenv from 'dotenv';
import fs from 'node:fs';

dotenv.config();

async function main() {
  const result = await generateText({
    model: openai.chat('gpt-4-turbo'),
    maxTokens: 512,
    messages: [
      {
        role: 'user',
        content: [
          { type: 'text', text: 'Describe the image in detail.' },
          { type: 'image', image: fs.readFileSync('./data/comic-cat.png') },
        ],
      },
    ],
  });

  console.log(result.text);
}

main().catch(console.error);
