// import type { Config } from 'jest'
const nextJest = require('next/jest.js');
 
const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
})
 
// Add any custom config to be passed to Jest
/** @type {import('jest').Config} */
const config = {
  // coverageProvider: 'v8',
  testEnvironment: 'jest-environment-jsdom',
  preset: 'ts-jest',
  testPathIgnorePatterns: ['\\actions-runner\\'],
  // Add more setup options before each test is run
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts','<rootDir>/jest.config2.js'],
}
 
// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
// export default createJestConfig(config)
module.exports = createJestConfig(config);