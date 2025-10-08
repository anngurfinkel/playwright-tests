import { test, expect } from '@playwright/test';

test('reset_password', async ({ page }) => {
  await page.goto('https://platform.labelyourdata.com/reset_password');

  const emailInput = page.getByTestId('sign-up-email');
  await expect(emailInput).toBeVisible();
  await emailInput.fill('hurfinkelannaqa@gmail.com');

  const resetButton = page.getByRole('button', { name: 'Reset Password' });
  await expect(resetButton).toBeVisible();
  await resetButton.click();

  const backToSignInButton = page.getByRole('button', { name: 'Back to sign in' });
  await expect(backToSignInButton).toBeVisible();
  await backToSignInButton.click();

  // Optionally, wait for sign-in page to appear or URL to change
  await expect(page).toHaveURL(/sign-in/);
});