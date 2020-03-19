module.exports = {
  transform: {
    '.(js|ts)': 'ts-jest'
  },
  moduleNameMapper: {
    '^~(.*)$': '<rootDir>/src/$1',
    '^tests(.*)$': '<rootDir>/__tests__/$1'
  },
  preset: 'ts-jest',
  testMatch: ['**/__tests__/**/*test.ts?(x)'],
  modulePathIgnorePatterns: ['<rootDir>/__tests__/helpers'],
  collectCoverageFrom: ['src/**/*.ts', '!src/index.ts']
}
