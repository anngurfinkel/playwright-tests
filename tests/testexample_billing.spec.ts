import { test, expect } from '@playwright/test';

test('billing', async ({ page }) => {
  await page.goto('https://platform.labelyourdata.com/sign-in');

  // Log in
  await page.getByTestId('sign-in-username').fill('client_test1');
  await page.getByTestId('sign-in-password').fill('Fjik67%ips');
  await page.getByTestId('sign-in-btn').click();

  // Wait for dashboard to load (optional but safer)
  await page.getByText('CL').first().waitFor({ timeout: 10000 });

  // Wait and click on Billing
  const billingLink = page.getByRole('link', { name: 'Billing' });
  await expect(billingLink, 'Billing link should be visible after login').toBeVisible({ timeout: 10000 });

  await Promise.all([
    billingLink.click(),
    page.waitForURL('**/billing', { timeout: 30000 }),
  ]);

  // URL and heading checks
  await expect(page).toHaveURL(/billing/);
  const billingHeader = page.getByRole('heading', { name: 'Billing & payments', level: 1 });
  await expect(billingHeader).toBeVisible();
});
