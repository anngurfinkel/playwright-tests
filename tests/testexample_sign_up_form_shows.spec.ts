import { test, expect } from '@playwright/test';

test('form_shows', async ({ page }) => {
  await page.goto('https://platform.labelyourdata.com/sign-up');

  // Перевіряємо, чи є всі основні елементи
  await expect(page.getByTestId('sign-up-email')).toBeVisible();
  await expect(page.getByTestId('sign-up-username')).toBeVisible();
  await expect(page.getByTestId('sign-up-password')).toBeVisible();
  await expect(page.getByTestId('sign-up-confirm_password')).toBeVisible();

  // Перевіряємо кнопку реєстрації
  await expect(page.getByRole('button', { name: 'Sign up', exact: true })).toBeVisible();
});
