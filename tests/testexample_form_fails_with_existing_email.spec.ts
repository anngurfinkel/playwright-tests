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

  const signUpButton = page.getByRole('button', { name: 'Sign up', exact: true });
  await expect(signUpButton).toBeEnabled(); // ensure form is valid
  await signUpButton.click();

  // Target error messages more precisely to avoid matching multiple elements
  const emailError = page.locator('.notification_wrapper_description', { hasText: /email.*already exists/i });
  const usernameError = page.locator('.notification_wrapper_description', { hasText: /username.*already exists/i });

  await expect(emailError).toBeVisible();
  await expect(usernameError).toBeVisible();
});
