// Include playwright module
const{test, expect} = require('@playwright/test');

// Write a test
test('Log in to Home Page', async ({ page }) => {
    // Go to URL
  await page.goto(process.env.URL);

  // Search with keywords

  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill(process.env.USER_NAME);
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill(process.env.PASS_WORD);
  await page.locator('[data-test="login-button"]').click();
  await page.waitForLoadState('load');
  await expect(page.locator('#header_container')).toContainText('Swag Labs');
  


});