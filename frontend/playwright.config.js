// playwright.config.js
const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  reporter: [
    ['html', { outputFolder: 'Report-HTML', open: 'always' }] // Custom folder for the report
  ],
  use: {
    timeout: 0,
    headless: false,
  },
});
