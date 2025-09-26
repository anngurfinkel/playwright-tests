import { test, expect } from '@playwright/test';

test('log_out', async ({ page }) => {
  await page.goto('https://platform.labelyourdata.com/sign-in');

  const usernameInput = page.getByTestId('sign-in-username');
  const passwordInput = page.getByTestId('sign-in-password');
  const signInButton = page.getByTestId('sign-in-btn');

  await expect(usernameInput).toBeVisible();
  await expect(passwordInput).toBeVisible();

  await usernameInput.fill('client_test1');
  await passwordInput.fill('Fjik67%ips');

  // Click sign in and wait for navigation
  await Promise.all([
    page.waitForNavigation(),
    signInButton.click(),
  ]);

  // Click on user initials 'CL'
  const userInitials = page.getByText('CL').first();
  await expect(userInitials).toBeVisible();
  await userInitials.click();

  // Click logout button
  const logoutButton = page.getByTestId('logout_btn');
  await expect(logoutButton).toBeVisible();
  await logoutButton.click();

  // Optionally, verify we are back on the sign-in page
  await expect(signInButton).toBeVisible();
});
