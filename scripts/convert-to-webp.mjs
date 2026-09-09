import sharp from 'sharp';
import { readdirSync, existsSync } from 'fs';
import { join, extname, basename } from 'path';

const INPUT_DIR = './src/assets/dr/fotos-alexander';
const OUTPUT_DIR = './src/assets/dr/fotos-alexander';
const QUALITY = 82; // buen balance calidad/peso

const SUPPORTED = ['.jpg', '.jpeg', '.png'];

const files = readdirSync(INPUT_DIR).filter(f =>
  SUPPORTED.includes(extname(f).toLowerCase())
);

if (files.length === 0) {
  console.log('No hay imágenes PNG/JPG para convertir.');
  process.exit(0);
}

console.log(`\nConvirtiendo ${files.length} imagen(es) a WebP (calidad ${QUALITY})...\n`);

let converted = 0;
for (const file of files) {
  const inputPath = join(INPUT_DIR, file);
  const outputName = basename(file, extname(file)) + '.webp';
  const outputPath = join(OUTPUT_DIR, outputName);

  try {
    const { size: before } = await import('fs').then(m => Promise.resolve(m.statSync(inputPath)));
    await sharp(inputPath).webp({ quality: QUALITY }).toFile(outputPath);
    const { size: after } = await import('fs').then(m => Promise.resolve(m.statSync(outputPath)));
    const savings = (((before - after) / before) * 100).toFixed(1);
    console.log(`  ✓  ${file.padEnd(20)} → ${outputName.padEnd(20)}  ${(before/1024).toFixed(0)} KB → ${(after/1024).toFixed(0)} KB  (${savings}% menos)`);
    converted++;
  } catch (err) {
    console.error(`  ✗  Error convirtiendo ${file}:`, err.message);
  }
}

console.log(`\n✅  ${converted}/${files.length} imágenes convertidas a WebP.\n`);
