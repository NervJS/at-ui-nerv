module.exports = {
  moduleFileExtensions: [
    'ts', 'tsx', 'js', 'jsx', 'json'
  ],
  rootDir: __dirname,
  testMatch: ['<rootDir>/src/**/__test__/**/*.test.(tsx|jsx)'],
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
    '^.+\\.tsx?$': 'ts-jest'
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
  moduleNameMapper: {
    react: 'nervjs',
    'react-dom': 'nervjs'
    // 'react-dom/server': 'nerv-server',
    // 'react-addons-test-utils': 'nerv-test-utils'
  }
}
