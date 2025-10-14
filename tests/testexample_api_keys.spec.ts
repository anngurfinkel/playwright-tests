import { test, expect } from '@playwright/test';

test('api_keys', async ({ page }) => {
  // Go to the sign-in page
  await page.goto('https://platform.labelyourdata.com/sign-in');

  // Fill in login credentials
  await page.getByTestId('sign-in-username').fill('client_test1');
  await page.getByTestId('sign-in-password').fill('Fjik67%ips');
  await page.getByTestId('sign-in-btn').click();

  // Wait for user initials (CL) to appear and click
  const userInitials = page.getByText('CL').first();
  await expect(userInitials).toBeVisible({ timeout: 10000 });
  await userInitials.click();

  // Navigate to Organization Management
  const orgManagementLink = page.getByRole('link', { name: 'Organization management' });
  await expect(orgManagementLink).toBeVisible({ timeout: 10000 });

  await Promise.all([
    orgManagementLink.click(),
    page.waitForURL('**/organization/members', { timeout: 30000 }),
  ]);

  await expect(page).toHaveURL(/organization/);

  // Click on the "API Keys" tab using visible text
  const apiTab = page.getByText('API Keys', { exact: true });
  await expect(apiTab).toBeVisible();
  await apiTab.click();

  // Verify that the API Keys tab content is loaded
  // Preferred: check for a reliable static element like a button or message
  const createApiKeyButton = page.getByRole('button', { name: 'Create new API key' });
  await expect(createApiKeyButton).toBeVisible();

  // Alternatively, check for empty state message if applicable
  await expect(page.getByText('No data')).toBeVisible();
});
