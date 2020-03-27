module.exports = {
  // Tailwind Paths
  configJS: 'tailwind.config.js',
  sourceCSS: './src/tailwind.css',
  outputCSS: './src/tailwind-compiled.css',
  // Sass
  sass: false,
  // PurgeCSS Settings
  purge: false,
  keyframes: false,
  fontFace: false,
  rejected: false,
  whitelist: [],
  whitelistPatterns: [],
  whitelistPatternsChildren: [],
  extensions: [
    '.ts',
    '.html',
    '.js'
  ],
  extractors: [],
  content: []
}
