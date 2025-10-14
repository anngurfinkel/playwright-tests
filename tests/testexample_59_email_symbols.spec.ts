/* import { test, expect } from '@playwright/test';

test('59_email_symbols', async ({ page }) => {
  await page.goto('https://platform.labelyourdata.com/sign-up/');

  const email = 'qwertyqwerty1qwertyqwerty1qwertyqwerty1qw@labelyourdata.com';

  const username =
    'rtyqwertyqwertyqwertyqwertyqwertyqwertyqwertyqwertyqwertyqwertyqwertyqwertyqwertyqwertyqwertyqwertyqwertyqwertyqwertyqwertyqwertyqwertyqwerty';

  const password = 'Fjik67%ipsFjik67%ipsFjik67%ips';

  await page.getByTestId('sign-up-email').fill(email);
  await page.getByTestId('sign-up-username').fill(username);
  await page.getByTestId('sign-up-password').fill(password);
  await page.getByTestId('sign-up-confirm_password').fill(password);

  await Promise.all([
    page.waitForNavigation({ url: /confirm-email/i, timeout: 10000 }),
    page.getByRole('button', { name: 'Sign up', exact: true }).click(),
  ]);

  await expect(page).toHaveURL(/confirm-email/i);
  await expect(page.getByRole('heading', { name: /confirm your email/i })).toBeVisible();
});
*/