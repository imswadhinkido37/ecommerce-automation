import { test, expect } from '@playwright/test';

test('test', async ({ page, context }) => {
  // Open Amazon
  await page.goto('https://www.amazon.in/');

  // Search for the product
  await page.fill('input[placeholder="Search Amazon.in"]', 'Insta 360 ace');
  await page.click('input[type="submit"]');

  // Wait for the search results and click on the product
  const [popup] = await Promise.all([
    page.waitForEvent('popup'),
    page.click('text="insta360 Ace - 4K120Fps Waterproof Digital Zoom Action Camera, 1/1.2" Sensor with Ai Noise Reduction, Active HDR Video, 48Mp Photos, 2.4" Flip Screen, Easy Magnetic Mounting & Advanced Ai Features."'),
  ]);

  // Attach a screenshot of the popup before interacting with it
  await test.info().attachments.push({
    name: 'popup-screenshot.png',
    path: 'popup-screenshot.png',
    contentType: 'image/png',
  });

  // Ensure the popup is ready
  await popup.waitForLoadState();

  // Add to Cart and wait for navigation
  await Promise.all([
    popup.waitForNavigation(),
    popup.click('xpath=//*[@id="add-to-cart-button"]'),
  ]);

  // Navigate to Cart
  await Promise.all([
    page.waitForNavigation(),
    page.click('xpath=//a[@href="/gp/cart/view.html?ref_=nav_cart"]'),
  ]);

  // Attach a screenshot of the Cart page
  await test.info().attachments.push({
    name: 'cart-page-screenshot.png',
    path: 'cart-page-screenshot.png',
    contentType: 'image/png',
  });

  // Proceed to Buy
  await page.waitForSelector('#sc-buy-box-ptc-button > span > input', { timeout: 60000 });
  await page.click('#sc-buy-box-ptc-button > span > input');

  // Capture a screenshot of the page before proceeding
  await page.screenshot({ path: 'proceed-to-buy-screenshot.png' });

  // Attach a screenshot of the Proceed to Buy page
  await test.info().attachments.push({
    name: 'proceed-to-buy-screenshot.png',
    path: 'proceed-to-buy-screenshot.png',
    contentType: 'image/png',
  });
});


 i want to remove the default timwout completely 
