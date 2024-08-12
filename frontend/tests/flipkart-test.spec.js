 import { test, expect } from '@playwright/test';

 test('Flipkart test', async ({ page }) => {
   // Open Flipkart
   await page.goto('https://www.flipkart.com/');
   // Search for the product
  await page.getByPlaceholder('Search for Products, Brands').click();
  await page.getByPlaceholder('Search for Products, Brands').fill('insta 360 ace');
  await page.getByLabel('Search for Products, Brands').click();
   // Wait for the search results and click on the product
   const [popup] = await Promise.all([
     page.waitForEvent('popup'),
     page.click('text="Insta360 Ace Sports and Action Camera"'),
   ]);
   // Attach a screenshot of the popup before interacting with it
   await test.info().attachments.push({
     name: 'popup-screenshot.png',
     path: 'popup-screenshot.png',
     contentType: 'image/png',
   });

   // Ensure the popup is ready
   await popup.waitForLoadState();
   // Attach a screenshot of the popup before interacting with it
   await popup.screenshot({ path: 'popup-screenshot.png' });

   // Add to Cart and wait for navigation
   await Promise.all([
     popup.waitForNavigation(),
     popup.getByRole('button', { name: 'Add to cart' }).click(),
   ]);

   // Navigate to Cart
   await page.goto('https://www.flipkart.com/viewcart?exploreMode=true&preference=FLIPKART');

   // Attach a screenshot of the Cart page
   await test.info().attachments.push({
     name: 'cart-page-screenshot.png',
     path: 'cart-page-screenshot.png',
     contentType: 'image/png',
   });

   // Navigate to Cart
   await page.getByRole('button', { name: 'Place Order' }).click();



   // Capture a screenshot of the page before proceeding
   await page.screenshot({ path: 'proceed-to-buy-screenshot.png' });

   // Attach a screenshot of the Proceed to Buy page
   await test.info().attachments.push({
     name: 'proceed-to-buy-screenshot.png',
     path: 'proceed-to-buy-screenshot.png',
     contentType: 'image/png',
   });
 });

