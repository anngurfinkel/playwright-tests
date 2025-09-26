import { test, expect } from '@playwright/test';

test('api_keys', async ({ page }) => {
  await page.goto('https://platform.labelyourdata.com/sign-in');

  await page.getByTestId('sign-in-username').fill('client_test1');
  await page.getByTestId('sign-in-password').fill('Fjik67%ips');
  await page.getByTestId('sign-in-btn').click();

  // Wait for the user initials 'CL' to appear and click
  await expect(page.getByText('CL').first()).toBeVisible();
  await page.getByText('CL').first().click();

  // Click on Organization management link and wait for navigation
  await Promise.all([
    page.waitForNavigation(),
    page.getByRole('link', { name: 'Organization management' }).click()
  ]);

  // Click on the API tab and verify it is active
  await page.getByTestId('tab-api').click();
  await expect(page.getByTestId('tab-api')).toHaveClass(/active/); // if the active tab has an 'active' class
});
