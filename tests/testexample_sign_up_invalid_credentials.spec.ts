import { test, expect } from '@playwright/test';

test('invalid_credentials', async ({ page }) => {
  await page.goto('https://platform.labelyourdata.com/sign-up');

  // Вводимо невалідні дані
  await page.getByTestId('sign-up-email').fill('1@1.1');
  await page.getByTestId('sign-up-username').fill('12345');
  await page.getByTestId('sign-up-password').fill('qqqqqqqq');
  await page.getByTestId('sign-up-confirm_password').fill('qqqqqqqq');

  // Натискаємо кнопку "Sign up"
  await page.getByRole('button', { name: 'Sign up', exact: true }).click();

  // Перевірка повідомлень про помилки
  await expect(
    page.getByTestId('form_item_error').filter({ hasText: 'Email is not valid' })
  ).toBeVisible();

  await expect(
    page.getByTestId('form_item_error').filter({
      hasText: 'Latin letters only, must start with a letter',
    })
  ).toBeVisible();

  await expect(
    page.getByTestId('form_item_error').filter({
      hasText: 'The password needs ≥1 Uppercase, ≥1 Digit, ≥1 Special Symbol.',
    })
  ).toBeVisible();
});
