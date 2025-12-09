import { PDFParse } from 'pdf-parse';
import fs from 'fs';

const buffer = fs.readFileSync('CV.pdf');
const parser = new PDFParse({ data: buffer });
// await parser.load();
const text = await parser.getText();
console.log(text);
