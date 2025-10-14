import { test, expect } from '@playwright/test';

test('password_8_symbols', async ({ page }) => {
  await page.goto('https://platform.labelyourdata.com/sign-up/');

  const uniqueId = Date.now();
  const email = `testuser+${uniqueId}@example.com`;
  const username = `client_test_${uniqueId}`;
  const password = 'Q12qQ34*'; // Valid 8-char password

  await page.getByTestId('sign-up-email').fill(email);
  await page.getByTestId('sign-up-username').fill(username);
  await page.getByTestId('sign-up-password').fill(password);
  await page.getByTestId('sign-up-confirm_password').fill(password);

  // Use exact match to avoid strict mode violation
  await Promise.all([
    page.getByRole('button', { name: 'Sign up', exact: true }).click(),
    page.waitForNavigation({ waitUntil: 'networkidle' }),
  ]);

  // Assert successful navigation
  await expect(page).toHaveURL(/confirm-email/i, { timeout: 10000 });
  await expect(page.getByRole('heading', { name: /confirm your email/i })).toBeVisible();
});
