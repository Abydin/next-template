import fs from 'fs';
import path from 'path';

// Function to create a directory if it doesn't exist
function createDirectory(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
    console.log(`Created directory: ${dir}`);
  } else {
    console.log(`Directory already exists: ${dir}`);
  }
}

// Function to create a file if it doesn't exist
function createFile(filePath, content = '') {
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, content);
    console.log(`Created file: ${filePath}`);
  } else {
    console.log(`File already exists: ${filePath}`);
  }
}

// Define the project structure
const projectStructure = {
  directories: [
    'public',
    'src/components/atoms',
    'src/components/molecules',
    'src/components/organisms',
    'src/components/blocks',
    'src/components/layouts',
    'src/components/modules',
    'src/components/tokens',
    'src/pages',
    'src/styles/base',
    'src/styles/objects',
    'src/styles/utilities',
    'src/styles/components',
    'src/styles/themes',
    'src/tests',
    'src/utils',
    'src/hooks',
  ],
  files: [
    '.eslintrc.js',
    '.prettierrc',
    'tsconfig.json',
    'jest.config.js',
    'jest.setup.ts',
    'package.json',
  ],
};

// Base path for project (can be customized)
const basePath = process.cwd(); // Current working directory

// Create the directories
projectStructure.directories.forEach((dir) => {
  createDirectory(path.join(basePath, dir));
});

// Create the files
projectStructure.files.forEach((file) => {
  createFile(path.join(basePath, file));
});

console.log('Project structure setup complete!');
