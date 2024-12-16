const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = path.join(__dirname, 'src', 'assets', 'tables'); // Update with the correct input path
const outputDir = path.join(__dirname, 'src', 'assets', 'tables', 'webp'); // Directory for converted WebP images

// Create output directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

// Function to convert images to WebP format
const convertToWebP = async (inputPath, outputPath) => {
  try {
    await sharp(inputPath)
      .webp({ quality: 80 }) // Adjust quality as needed
      .toFile(outputPath);
    console.log(`Converted: ${inputPath} -> ${outputPath}`);
  } catch (err) {
    console.error(`Error converting ${inputPath}:`, err);
  }
};

// Read and convert all .jpg files in the input directory
fs.readdir(inputDir, (err, files) => {
  if (err) {
    console.error('Error reading directory:', err);
    return;
  }

  files.forEach((file) => {
    if (file.endsWith('.jpg')) {
      const inputPath = path.join(inputDir, file);
      const outputPath = path.join(outputDir, file.replace('.jpg', '.webp'));

      convertToWebP(inputPath, outputPath);
    }
  });
});
