import { test, expect } from '@playwright/test';

test('billing', async ({ page }) => {
  await page.goto('https://platform.labelyourdata.com/sign-in');

  await page.getByTestId('sign-in-username').fill('client_test1');
  await page.getByTestId('sign-in-password').fill('Fjik67%ips');
  await page.getByTestId('sign-in-btn').click();

  // Wait for the 'Billing' link to appear as a sign of successful login
  const billingLink = page.getByRole('link', { name: 'Billing' });
  await expect(billingLink).toBeVisible({ timeout: 10000 });

  // Optionally, click the Billing link and wait for navigation
  await Promise.all([
    page.waitForNavigation(),
    billingLink.click()
  ]);

  // You could add further assertions here, e.g., check URL or page content
});
