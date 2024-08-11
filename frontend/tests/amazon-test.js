const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: false }); // Set headless to true for non-UI mode
  const context = await browser.newContext();
  const page = await context.newPage();

  // Go to Amazon
  await page.goto('https://www.amazon.in');

  // Perform a search
  await page.fill('input[name="field-keywords"]', 'laptop');
  await page.press('input[name="field-keywords"]', 'Enter');

  // Wait for the search results to load
  await page.waitForSelector('.s-main-slot');

  console.log('Search completed successfully!');

  await browser.close();
})();
