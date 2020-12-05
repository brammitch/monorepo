/* eslint-disable @typescript-eslint/no-var-requires */
const { jsWithTs: tsjPreset } = require('ts-jest/presets');

module.exports = {
  collectCoverageFrom: [
    '<rootDir>/packages/*/src/**/*.{js,jsx,ts,tsx}',
    '!<rootDir>/packages/*/src/index.{js,jsx,ts,tsx}',
    '!<rootDir>/packages/*/src/reportWebVitals.{js,ts}',
    '!<rootDir>/packages/core/dist/*',
    '!<rootDir>/packages/core/src/*.config.{js,jsx,ts,tsx}',
    '!<rootDir>/packages/core/src/setupTests.ts',
    '!<rootDir>/packages/core/src/config/*',
  ],
  coverageDirectory: '<rootDir>/coverage',
  coveragePathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/packages/*/dist/',
    '<rootDir>/packages/*/node_modules/',
  ],
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.jest.json',
      diagnostics: {
        ignoreCodes: 2307,
      },
    },
  },
  moduleFileExtensions: ['tsx', 'ts', 'jsx', 'js'],
  modulePaths: [
    '<rootDir>/packages/app-one/src',
    '<rootDir>/packages/app-two/src',
    '<rootDir>/packages/core/src',
  ],
  preset: 'ts-jest/presets/js-with-ts',
  setupFilesAfterEnv: [
    '<rootDir>/packages/app-one/src/setupTests.ts',
    '<rootDir>/packages/app-two/src/setupTests.ts',
  ],
  testMatch: ['**/*.(test|spec).(js|jsx|ts|tsx)'],
  transform: {
    ...tsjPreset.transform,
    '^.+\\.css$': '<rootDir>/config/cssTransform.js',
    '^(?!.*\\.(js|jsx|ts|tsx|css|json)$)': '<rootDir>/config/fileTransform.js',
  },
};
