import { test, expect } from '@playwright/test';

test('max_count_digitals', async ({ page }) => {
  await page.goto('https://platform.labelyourdata.com/sign-up');

  await page.getByTestId('sign-up-email').fill('ahurfinkelahurfinkelahurfinkelahurfinkelahurfinkel@labelyourdata.com');

  const longUsername = 'qwerty'.repeat(30); // >150 chars
  await page.getByTestId('sign-up-username').fill(longUsername);

  const longPassword = 'Fjik67%ips'.repeat(4); // >30 chars
  await page.getByTestId('sign-up-password').fill(longPassword);
  await page.getByTestId('sign-up-confirm_password').fill(longPassword);

  await page.getByRole('button', { name: 'Sign up', exact: true }).click();

  await expect(page.getByText('maxLength 150')).toBeVisible();       // Username error
  await expect(page.getByText('Max length 30')).toBeVisible();       // Password error

  // Confirm password error (second "maxLength" message)
  await expect(
    page.locator('[data-testid="form_item_error"]').filter({ hasText: 'maxLength' }).nth(1)
  ).toBeVisible();
});
