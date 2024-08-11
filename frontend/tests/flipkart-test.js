const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: false }); // Set headless to true for non-UI mode
  const context = await browser.newContext();
  const page = await context.newPage();

  // Go to Flipkart
  await page.goto('https://www.flipkart.com');

  // Close the login popup
  await page.click('button._2KpZ6l._2doB4z');

  // Perform a search
  await page.fill('input[name="q"]', 'laptop');
  await page.press('input[name="q"]', 'Enter');

  // Wait for the search results to load
  await page.waitForSelector('div._1AtVbE');

  // Capture product details
  const products = await page.$$eval('div._1AtVbE', items =>
    items.map(item => {
      const nameElement = item.querySelector('a.s1Q9rs');
      const priceElement = item.querySelector('div._30jeq3');
      return {
        name: nameElement ? nameElement.innerText : 'No name',
        price: priceElement ? priceElement.innerText : 'No price',
        link: nameElement ? `https://www.flipkart.com${nameElement.getAttribute('href')}` : 'No link'
      };
    })
  );

  console.log('Search results:', products);

  await browser.close();
})();
