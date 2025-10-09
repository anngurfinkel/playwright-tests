import { test, expect } from '@playwright/test';

test('form_fails_with_existing_email_and_username', async ({ page }) => {
  await page.goto('https://platform.labelyourdata.com/sign-up');

  const existingEmail = 'hurfinkelannaqa@gmail.com';
  const existingUsername = 'client_test1';
  const password = 'Fjik67%ips';

  await page.getByTestId('sign-up-email').fill(existingEmail);
  await page.getByTestId('sign-up-username').fill(existingUsername);
  await page.getByTestId('sign-up-password').fill(password);
  await page.getByTestId('sign-up-confirm_password').fill(password);

  await page.getByRole('button', { name: 'Sign up', exact: true }).click();

  // ✅ Match actual UI message
  await expect(page.locator('text=EMAIL - user with this email address already exists.')).toBeVisible();
  await expect(page.locator('text=USERNAME - A user with that username already exists.')).toBeVisible();
});
