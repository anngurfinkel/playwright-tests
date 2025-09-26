import { test, expect } from '@playwright/test';

test('reset_password', async ({ page }) => {
  await page.goto('https://platform.labelyourdata.com/reset_password');
  await page.getByTestId('sign-up-email').click();
  await page.getByTestId('sign-up-email').fill('ahurfinkel@labelyourdata.com');
  await page.getByRole('button', { name: 'Reset Password' }).click();
  await page.getByRole('button', { name: 'Back to sign in' }).click();
});