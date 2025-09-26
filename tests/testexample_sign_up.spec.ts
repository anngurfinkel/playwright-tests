import { test, expect } from '@playwright/test';

test('sign_up', async ({ page }) => {
  await page.goto('https://platform.labelyourdata.com/sign-up/');

  await page.getByTestId('sign-up-email').fill('hurfinkelannaqa@gmail.com');
  await page.getByTestId('sign-up-username').fill('client_test1');
  await page.getByTestId('sign-up-password').fill('Fjik67%ips');
  await page.getByTestId('sign-up-confirm_password').fill('Fjik67%ips');

  // Click sign up and wait for navigation or confirmation
  await Promise.all([
    page.waitForNavigation(),
    page.getByRole('button', { name: 'Sign up' }).click(),
  ]);

  // Example assertion: check for a success message or redirection
  // Replace with actual element or text on your success page
  await expect(page).toHaveURL(/dashboard|welcome|success/i);

  // Or check for a success notification or welcome message:
  // await expect(page.getByText('Welcome')).toBeVisible();
});
