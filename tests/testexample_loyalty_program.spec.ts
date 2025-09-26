import { test, expect } from '@playwright/test';

test('loyalty_program', async ({ page }) => {
  await page.goto('https://platform.labelyourdata.com/sign-in');

  const usernameInput = page.getByTestId('sign-in-username');
  const passwordInput = page.getByTestId('sign-in-password');
  const signInButton = page.getByTestId('sign-in-btn');

  await expect(usernameInput).toBeVisible();
  await expect(passwordInput).toBeVisible();

  await usernameInput.fill('client_test1');
  await passwordInput.fill('Fjik67%ips');

  await Promise.all([
    page.waitForNavigation(),
    signInButton.click(),
  ]);

  const userInitials = page.getByText('CL').first();
  await expect(userInitials).toBeVisible();
  await userInitials.click();

  const loyaltyLink = page.getByRole('link', { name: 'Loyalty program Starter' });
  await expect(loyaltyLink).toBeVisible();
  await loyaltyLink.click();

  // Optional: verify something on the loyalty program page
  // await expect(page.locator('selector-for-loyalty-page-element')).toBeVisible();
});
