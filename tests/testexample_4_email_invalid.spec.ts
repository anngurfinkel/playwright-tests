import { test, expect } from '@playwright/test';

test('4_email_invalid', async ({ page }) => {
  await page.goto('https://platform.labelyourdata.com/sign-up');

  // Вводимо невалідну електронну пошту
  await page.getByTestId('sign-up-email').fill('q9 9@labelyourdata.com');

  // Вводимо валідні дані для інших полів
  await page.getByTestId('sign-up-username').fill('test9876545');
  await page.getByTestId('sign-up-password').fill('Fjik67%ips');
  await page.getByTestId('sign-up-confirm_password').fill('Fjik67%ips');

  // Натискаємо кнопку "Sign up"
  await page.getByRole('button', { name: 'Sign up', exact: true }).click();

  // Перевіряємо, що з'явилось повідомлення про невалідну пошту
  await expect(
    page.getByTestId('form_item_error').filter({ hasText: 'Email is not valid' })
  ).toBeVisible();

  // Перевіряємо, що інші помилки НЕ з'явились
  await expect(
    page.getByTestId('form_item_error').filter({
      hasText: 'Latin letters only, must start with a letter',
    })
  ).toHaveCount(0);

  await expect(
    page.getByTestId('form_item_error').filter({
      hasText: 'The password needs ≥1 Uppercase, ≥1 Digit, ≥1 Special Symbol.',
    })
  ).toHaveCount(0);
});
