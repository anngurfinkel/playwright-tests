/* import { test, expect } from '@playwright/test';

test('sign_up', async ({ page }) => {
  await page.goto('https://platform.labelyourdata.com/sign-up/');

  const email = `hurfinkelannaqa@gmail.com`;
  const username = `client_test1`;
  const password = 'Fjik67%ips';

  await page.getByTestId('sign-up-email').fill(email);
  await page.getByTestId('sign-up-username').fill(username);
  await page.getByTestId('sign-up-password').fill(password);
  await page.getByTestId('sign-up-confirm_password').fill(password);

  const signUpButton = page.getByRole('button', { name: 'Sign up', exact: true });
  await expect(signUpButton).toBeEnabled();
  await signUpButton.click();

  await page.waitForURL(/confirm-email/i, { timeout: 10000 });
  await expect(page.getByRole('heading', { name: /confirm your email/i })).toBeVisible();
});
*/