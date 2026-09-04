import sharp from 'sharp';
import { readdir, unlink } from 'fs/promises';
import { join, extname, basename } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const assetDirs = [
  join(__dirname, '../src/assets/dr'),
  join(__dirname, '../src/assets/gallery'),
  join(__dirname, '../src/assets/logo'),
  join(__dirname, '../public'),
];

const CONVERTIBLE_EXTS = ['.png', '.jpg', '.jpeg'];

async function convertDir(dir) {
  let files;
  try {
    files = await readdir(dir);
  } catch {
    console.warn(`Skipping missing dir: ${dir}`);
    return;
  }

  for (const file of files) {
    const ext = extname(file).toLowerCase();
    if (!CONVERTIBLE_EXTS.includes(ext)) continue;

    // Skip SVG placeholders or icons that should stay as PNG (apple-icon, favicon, og-image)
    const name = basename(file, ext);
    const inputPath = join(dir, file);
    const outputPath = join(dir, `${name}.webp`);

    try {
      await sharp(inputPath)
        .webp({ quality: 85, effort: 6 })
        .toFile(outputPath);

      const inputSize = (await import('fs')).statSync(inputPath).size;
      const outputSize = (await import('fs')).statSync(outputPath).size;
      const savings = (((inputSize - outputSize) / inputSize) * 100).toFixed(1);

      console.log(`✅ ${file} → ${name}.webp  (${(inputSize/1024).toFixed(0)}KB → ${(outputSize/1024).toFixed(0)}KB, -${savings}%)`);

      // Remove original after successful conversion
      await unlink(inputPath);
      console.log(`   🗑  Removed original: ${file}`);
    } catch (err) {
      console.error(`❌ Failed to convert ${file}:`, err.message);
    }
  }
}

console.log('🚀 Converting images to WebP...\n');
for (const dir of assetDirs) {
  console.log(`\n📁 ${dir}`);
  await convertDir(dir);
}
console.log('\n✨ Done!');
