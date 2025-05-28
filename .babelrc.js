module.exports = {
  presets: [
    ['@babel/preset-env', { targets: { node: 'current' } }],
    '@babel/preset-typescript',
    ['@babel/preset-react', { runtime: 'automatic' }]
  ],
  // This ensures this Babel config is only used for tests
  env: {
    test: {
      plugins: []
    }
  }
}; 