import { test, expect } from '@playwright/test';

test('rewards program flow', async ({ page }) => {
  await page.goto('https://platform.labelyourdata.com/sign-in');

  // Fill in username
  const usernameInput = page.getByTestId('sign-in-username');
  await expect(usernameInput).toBeVisible();
  await usernameInput.fill('client_test1');

  // Fill in password
  const passwordInput = page.getByTestId('sign-in-password');
  await expect(passwordInput).toBeVisible();
  await passwordInput.fill('Fjik67%ips');

  // Click sign-in and wait for navigation
  await Promise.all([
    page.waitForNavigation(),
    page.getByTestId('sign-in-btn').click(),
  ]);

  // Click on the first element with text 'CL'
  const clElement = page.getByText('CL').first();
  await expect(clElement).toBeVisible();
  await clElement.click();

  // Navigate to Organization management
  const orgManagementLink = page.getByRole('link', { name: 'Organization management' });
  await expect(orgManagementLink).toBeVisible();
  await orgManagementLink.click();

  // Click on rewards program tab
  const rewardsTab = page.getByTestId('tab-rewards-program');
  await expect(rewardsTab).toBeVisible();
  await rewardsTab.click();

  // Optionally, assert that rewards program tab content is visible
  // For example:
  // await expect(page.getByTestId('rewards-program-content')).toBeVisible();
});
