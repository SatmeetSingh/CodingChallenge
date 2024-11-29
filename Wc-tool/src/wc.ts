import * as fs from 'fs';

export function WcTool(arg1: string, arg2: string = 'test.txt') {
  if (!arg2) {
    console.log(
      `${ReadLines(arg1)} ${CountWords(arg1)} ${CountBytes(arg1)} ${arg1}`
    );
  }
  if (arg1.toLowerCase() === '-c') {
    console.log(`${CountBytes(arg2)} ${arg2}`);
  }

  if (arg1.toLowerCase() === '-l') {
    console.log(`${ReadLines(arg2)} ${arg2}`);
  }

  if (arg1.toLowerCase() === '-w') {
    console.log(`${CountWords(arg2)} ${arg2}`);
  }

  if (arg1.toLowerCase() === '-m') {
    CountCharacters(arg2);
  }
}

function ReadLines(arg2: string) {
  try {
    const data = fs.readFileSync(`${arg2}`, 'utf-8');
    const lines = data.split('\n');
    const lineLength = lines.length;
    return lineLength;
    console.log(`${lineLength} ${arg2}`);
  } catch (err) {
    console.log(err);
  }
}

function CountBytes(arg2: string) {
  try {
    const data = fs.statSync(`${arg2}`);
    return data.size;
  } catch (error) {
    console.log(error);
  }
}

function CountCharacters(arg2: string) {
  try {
    const data = fs.readFileSync(`${arg2}`, 'utf-8');
    const char = data.split('');
    const worldLength = char.length;
    console.log(`${worldLength} ${arg2}`);
    return worldLength;
  } catch (err) {
    console.log(err);
  }
}

function CountWords(arg2: string) {
  try {
    const data = fs.readFileSync(`${arg2}`, 'utf-8');
    const wordLength = data.trim().split(/\s+/).length;
    return wordLength;

    console.log(`${wordLength} ${arg2}`);
  } catch (err) {
    console.log(err);
  }
}
