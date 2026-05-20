const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = 'C:\\Users\\Hbib\\.gemini\\antigravity-ide\\brain\\e2c650ec-83bc-4b14-86af-2aef87697476';
const outputDir = 'e:\\Web Dev\\ent-clinic-silchar\\public\\images';

const files = fs.readdirSync(inputDir);

async function process() {
  for (const file of files) {
    if (file.startsWith('allergy_clinic') && file.endsWith('.png')) {
      await sharp(path.join(inputDir, file))
        .webp({ quality: 80 })
        .toFile(path.join(outputDir, 'allergy_clinic.webp'));
      console.log('Converted allergy_clinic');
    }
    if (file.startsWith('otology_clinic') && file.endsWith('.png')) {
      await sharp(path.join(inputDir, file))
        .webp({ quality: 80 })
        .toFile(path.join(outputDir, 'otology_clinic.webp'));
      console.log('Converted otology_clinic');
    }
  }
}

process().catch(console.error);
