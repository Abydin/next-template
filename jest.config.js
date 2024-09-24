module.exports = {
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.jest.json',
    },
  },

  moduleDirectories: ['node_modules', 'src'],

  // Optional Jest setup file
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },

  preset: 'ts-jest',

  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testEnvironment: 'jest-environment-jsdom',
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': '@swc/jest', // Use @swc/jest for transforming files
  },
  transformIgnorePatterns: ['/node_modules/'],
};
