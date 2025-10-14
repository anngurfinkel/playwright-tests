/* import { test, expect } from '@playwright/test';

test('60_email_symbols', async ({ page }) => {
  await page.goto('https://platform.labelyourdata.com/sign-up/');

  // Email with 60 characters in local part
  const email = 'qwertyqwertyqwertyqwertyqwertyqwertyqwertyqwertyqw@gmail.com';

  // Generate a unique username to avoid conflicts
  const uniqueId = Date.now();
  const username =
    `rtyqwertyqwertyqwertyqwertyqwertyqwertyqwertyqwertyqwertyq${uniqueId}`;

  const password = 'Fjik67%ipsFjik67%ipsFjik67%ips';

  // Fill the form fields
  await page.getByTestId('sign-up-email').fill(email);
  await page.getByTestId('sign-up-username').fill(username);
  await page.getByTestId('sign-up-password').fill(password);
  await page.getByTestId('sign-up-confirm_password').fill(password);

  // Click sign up button
  await page.getByRole('button', { name: 'Sign up', exact: true }).click();

  // Check for error message — fail test if username exists or any error is shown
  const errorLocator = page.locator('text=USERNAME - A user with that username already exists.');
  if (await errorLocator.isVisible()) {
    throw new Error('Test failed: username already exists.');
  }

  // Wait for URL to change to /confirm-email
  await expect(page).toHaveURL(/confirm-email/i, { timeout: 10000 });

  // Confirm the confirmation heading is visible
  await expect(page.getByRole('heading', { name: /confirm your email/i })).toBeVisible();
});
*/