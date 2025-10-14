import { test, expect } from '@playwright/test';

test('organization_management', async ({ page }) => {
  await page.goto('https://platform.labelyourdata.com/sign-in');

  await page.getByTestId('sign-in-username').fill('client_test1');
  await page.getByTestId('sign-in-password').fill('Fjik67%ips');
  await page.getByTestId('sign-in-btn').click();

  // Locate user menu using initials
  const userMenu = page.getByText('CL').first();
  await expect(userMenu).toBeVisible({ timeout: 10000 });
  await userMenu.click();

  // Navigate to Organization Management
  await page.getByRole('link', { name: 'Organization management' }).click();

  // Verify we're on the correct page
  await expect(page).toHaveURL(/organization/);
  await expect(page.getByRole('heading', { name: 'Organization Management' })).toBeVisible();
});
