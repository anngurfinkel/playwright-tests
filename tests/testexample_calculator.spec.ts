import { test, expect } from '@playwright/test';

test('calculator', async ({ page }) => {
  await page.goto('https://platform.labelyourdata.com/sign-in');

  await page.getByTestId('sign-in-username').fill('client_test1');
  await page.getByTestId('sign-in-password').fill('Fjik67%ips');
  await page.getByTestId('sign-in-btn').click();

  // Wait for the 'Calculator' link to appear as a sign of successful login
  const calculatorLink = page.getByRole('link', { name: 'Calculator' });
  await expect(calculatorLink).toBeVisible({ timeout: 10000 });

  // Click the Calculator link and wait for navigation to complete
  await Promise.all([
    page.waitForNavigation(),
    calculatorLink.click()
  ]);
});
