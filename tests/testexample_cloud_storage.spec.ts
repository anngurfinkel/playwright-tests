import { test, expect } from '@playwright/test';

test('cloud_storage', async ({ page }) => {
  await page.goto('https://platform.labelyourdata.com/sign-in');

  // Fill username and password (no need to click before fill)
  await page.getByTestId('sign-in-username').fill('client_test1');
  await page.getByTestId('sign-in-password').fill('Fjik67%ips');

  // Click sign in button and wait for navigation to complete
  await Promise.all([
    page.waitForNavigation(),
    page.getByTestId('sign-in-btn').click(),
  ]);

  // Click on user initials 'CL'
  const userInitials = page.getByText('CL').first();
  await expect(userInitials).toBeVisible();
  await userInitials.click();

  // Click 'Organization management' link and wait for navigation
  const orgManagementLink = page.getByRole('link', { name: 'Organization management' });
  await Promise.all([
    page.waitForNavigation(),
    orgManagementLink.click(),
  ]);

  // Click on 'Cloud Storage' tab and verify it's active (if possible)
  const cloudStorageTab = page.getByTestId('tab-cloud-storage');
  await cloudStorageTab.click();
  await expect(cloudStorageTab).toHaveClass(/active/); // adjust if your app uses a different active indicator
});
