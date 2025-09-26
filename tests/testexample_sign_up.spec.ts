import { test, expect } from '@playwright/test';

test('sign_up', async ({ page }) => {
  await page.goto('https://platform.labelyourdata.com/sign-up/');

  await page.getByTestId('sign-up-email').fill('hurfinkelannaqa@gmail.com');
  await page.getByTestId('sign-up-username').fill('client_test1');
  await page.getByTestId('sign-up-password').fill('Fjik67%ips');
  await page.getByTestId('sign-up-confirm_password').fill('Fjik67%ips');

  await page.getByRole('button', { name: 'Sign up', exact: true }).click();
});
