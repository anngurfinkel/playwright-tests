import { test, expect } from '@playwright/test';

test('billing', async ({ page }) => {
  await page.goto('https://platform.labelyourdata.com/sign-in');

  await page.getByTestId('sign-in-username').fill('client_test1');
  await page.getByTestId('sign-in-password').fill('Fjik67%ips');
  await page.getByTestId('sign-in-btn').click();

  // Wait for the 'Calculator' link to appear as a sign of successful login
  await expect(page.getByRole('link', { name: 'Billing' })).toBeVisible({ timeout: 10000 });

 
});
