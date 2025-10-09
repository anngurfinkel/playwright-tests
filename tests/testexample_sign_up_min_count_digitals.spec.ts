import { test, expect } from '@playwright/test';

test('min_count_digitals', async ({ page }) => {
  await page.goto('https://platform.labelyourdata.com/sign-up');

  await page.getByTestId('sign-up-email').fill('ah'); // Too short
  await page.getByTestId('sign-up-username').fill('qw'); // Too short
  await page.getByTestId('sign-up-password').fill('Fjik67%'); // 7 chars
  await page.getByTestId('sign-up-confirm_password').fill('Fjik67%');

  await page.getByRole('button', { name: 'Sign up', exact: true }).click();

  // Email minLength error
  await expect(
    page.locator('[data-testid="form_item_error"]').filter({ hasText: 'minLength 3' }).nth(0)
  ).toBeVisible();

  // Username minLength error
  await expect(
    page.locator('[data-testid="form_item_error"]').filter({ hasText: 'minLength 3' }).nth(1)
  ).toBeVisible();

  // Password length error
  await expect(
    page.locator('[data-testid="form_item_error"]').filter({ hasText: 'Password must have at least 8 characters' }).nth(0)
  ).toBeVisible();

  // Confirm password length error
  await expect(
    page.locator('[data-testid="form_item_error"]').filter({ hasText: 'Password must have at least 8 characters' }).nth(1)
  ).toBeVisible();
});
