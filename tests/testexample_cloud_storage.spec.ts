import { test, expect } from '@playwright/test';

test('organization_management', async ({ page }) => {
  await page.goto('https://platform.labelyourdata.com/sign-in');

  const usernameInput = page.getByTestId('sign-in-username');
  const passwordInput = page.getByTestId('sign-in-password');
  const signInButton = page.getByTestId('sign-in-btn');

  await expect(usernameInput).toBeVisible({ timeout: 5000 });
  await expect(passwordInput).toBeVisible({ timeout: 5000 });

  await usernameInput.fill('client_test1');
  await passwordInput.fill('Fjik67%ips');

  await signInButton.click();

  const userInitials = page.getByText('CL').first();
  await expect(userInitials).toBeVisible({ timeout: 15000 });
  await userInitials.click();

  const orgManagementLink = page.getByRole('link', { name: 'Organization management' });
  await expect(orgManagementLink).toBeVisible({ timeout: 5000 });
  await orgManagementLink.click();

  await expect(page).toHaveURL('https://platform.labelyourdata.com/organization/members');

  // Чекати появу заголовка сторінки (як приклад)
  const header = page.locator('h1', { hasText: 'Organization management' });
  await expect(header).toBeVisible({ timeout: 10000 });
});
