// convert.js (version ESM)
import fs from "fs";
import path from "path";
import sharp from "sharp";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const inputDir = path.join(__dirname, "public/photos");
const outputDir = path.join(__dirname, "public/webp");

function ensureDirSync(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

function convertImagesRecursively(currentInputDir, currentOutputDir) {
  const items = fs.readdirSync(currentInputDir);

  for (const item of items) {
    const inputPath = path.join(currentInputDir, item);
    const outputPath = path.join(currentOutputDir, item);

    const stat = fs.statSync(inputPath);

    if (stat.isDirectory()) {
      ensureDirSync(outputPath);
      convertImagesRecursively(inputPath, outputPath);
    } else if (stat.isFile()) {
      const ext = path.extname(item).toLowerCase();
      if ([".png", ".webp", ".jpeg"].includes(ext)) {
        const webpOutput = outputPath.replace(/\.(png|jpg|jpeg)$/i, ".webp");

        sharp(inputPath)
          .webp({ quality: 80 })
          .toFile(webpOutput)
          .then(() => {
            console.log(`✅ Converti : ${inputPath} → ${webpOutput}`);
          })
          .catch(err => {
            console.error(`❌ Erreur avec ${inputPath}:`, err);
          });
      }
    }
  }
}

ensureDirSync(outputDir);
convertImagesRecursively(inputDir, outputDir);
