import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const inputDir = path.join(process.cwd(), 'images');
const outputDir = path.join(process.cwd(), 'src', 'assets', 'images');

if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

const files = fs.readdirSync(inputDir).filter(file => file.endsWith('.svg'));

console.log(`Found ${files.length} SVG files to optimize...`);

async function processImages() {
    for (const file of files) {
        const name = path.parse(file).name;
        const inputPath = path.join(inputDir, file);

        console.log(`Processing ${file}...`);

        // Create 1200px version (Desktop/Retina)
        await sharp(inputPath, { density: 300 }) // High density for SVG
            .resize(1200)
            .webp({ quality: 80, effort: 6 })
            .toFile(path.join(outputDir, `${name}-large.webp`));

        // Create 600px version (Mobile/Standard)
        await sharp(inputPath, { density: 300 })
            .resize(600)
            .webp({ quality: 80, effort: 6 })
            .toFile(path.join(outputDir, `${name}-small.webp`));

        console.log(`Created WebP versions for ${name}`);
    }
}

processImages().catch(err => console.error(err));
