const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const targetDir = path.join(__dirname, '../public/images/hearing_aids');

fs.readdir(targetDir, (err, files) => {
  if (err) {
    console.error('Error reading directory:', err);
    process.exit(1);
  }

  const pngFiles = files.filter(f => f.toLowerCase().endsWith('.png'));
  console.log(`Found ${pngFiles.length} png files to convert.`);

  if (pngFiles.length === 0) {
    console.log('No png files found to convert.');
    return;
  }

  const promises = pngFiles.map(file => {
    const inputPath = path.join(targetDir, file);
    const outputName = file.substring(0, file.lastIndexOf('.')) + '.webp';
    const outputPath = path.join(targetDir, outputName);

    console.log(`Converting ${file} -> ${outputName}`);
    return sharp(inputPath)
      .webp({ quality: 80 })
      .toFile(outputPath)
      .then(() => {
        console.log(`Converted: ${file}`);
        // Delete original file
        fs.unlinkSync(inputPath);
        console.log(`Deleted original: ${file}`);
      })
      .catch(err => {
        console.error(`Failed to convert ${file}:`, err);
      });
  });

  Promise.all(promises).then(() => {
    console.log('All conversions completed successfully!');
  });
});
