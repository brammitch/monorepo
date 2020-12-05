/* eslint-disable @typescript-eslint/no-var-requires */
const { jsWithTs: tsjPreset } = require('ts-jest/presets');

module.exports = {
  collectCoverageFrom: ['<rootDir>/src/*.{js,jsx,ts,tsx}', '!<rootDir>/config/*.{js,jsx,ts,tsx}'],
  coverageDirectory: '<rootDir>/coverage',
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.jest.json',
      diagnostics: {
        ignoreCodes: 2307,
      },
    },
  },
  moduleFileExtensions: ['tsx', 'ts', 'jsx', 'js'],
  preset: 'ts-jest/presets/js-with-ts',
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
  testMatch: ['**/*.(test|spec).(js|jsx|ts|tsx)'],
  transform: {
    ...tsjPreset.transform,
    '^.+\\.css$': '<rootDir>/config/cssTransform.js',
    '^(?!.*\\.(js|jsx|ts|tsx|css|json)$)': '<rootDir>/config/fileTransform.js',
  },
};
