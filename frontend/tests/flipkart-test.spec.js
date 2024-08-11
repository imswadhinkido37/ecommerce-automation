const { test, expect } = require('@playwright/test');

test('Flipkart product search and navigation', async ({ page }) => {
  // Go to Flipkart
  await page.goto('https://www.flipkart.com');
  await page.click('button._2KpZ6l._2doB4z'); // Close the login popup

  // Perform a search for "Titan watch"
  await page.fill('input[name="q"]', 'Titan watch');
  await page.press('input[name="q"]', 'Enter');

  // Wait for search results to load
  await page.waitForSelector('._1AtVbE');

  // Capture product details
  const firstProduct = await page.locator('._1AtVbE').first();
  const productName = await firstProduct.locator('a .IRpwTa').textContent();
  const productPrice = await firstProduct.locator('._30jeq3').textContent();
  const productLink = await firstProduct.locator('a').getAttribute('href');

  console.log('Product Name:', productName);
  console.log('Product Price:', productPrice);
  console.log('Product Link:', `https://www.flipkart.com${productLink}`);

  // Select the first product and go to the Add to Cart screen
  await firstProduct.locator('a').click();
  await page.waitForSelector('._2KpZ6l._2U9uOA');
  await page.click('._2KpZ6l._2U9uOA');

  // Go to the Buy Now screen
  await page.waitForSelector('._2aK-7D');
  await page.click('._2aK-7D');

  // Proceed to Payment Gateway screen
  await page.waitForSelector('._2KpZ6l._1_3w1N');
  await page.click('._2KpZ6l._1_3w1N');

  // Close the browser
  await page.close();
});
