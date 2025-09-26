import { test, expect } from '@playwright/test';

test('terms_of_use', async ({ page }) => {
  await page.goto('https://platform.labelyourdata.com/sign-in');

  // Fill username and password (no unnecessary clicks)
  await page.getByTestId('sign-in-username').fill('client_test1');
  await page.getByTestId('sign-in-password').fill('Fjik67%ips');

  // Click sign-in and wait for navigation
  await Promise.all([
    page.waitForNavigation(),
    page.getByTestId('sign-in-btn').click(),
  ]);

  // Click first 'CL' element
  await page.getByText('CL').first().click();

  // Click 'Terms of use' link and wait for navigation
  await Promise.all([
    page.waitForNavigation(),
    page.getByRole('link', { name: 'Terms of use' }).click(),
  ]);

  // Optional: Assert URL or page content to confirm 'Terms of use' loaded
  await expect(page).toHaveURL(/terms-of-use/i);
  // Or check for specific text on the Terms of Use page
  await expect(page.getByText(/terms of use/i)).toBeVisible();
});
