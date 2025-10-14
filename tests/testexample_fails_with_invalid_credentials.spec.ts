import { test, expect } from '@playwright/test';

test('sign_in_fails_with_invalid_credentials', async ({ page }) => {
  await page.goto('https://platform.labelyourdata.com/sign-in');

  await page.getByTestId('sign-in-username').fill('client_t');
  await page.getByTestId('sign-in-password').fill('Fjik67%ip');

  await page.getByTestId('sign-in-btn').click();

  // Чекаємо на повідомлення про помилку з англійським текстом
  const errorLocator = page.locator('text=Unable to log in with provided credentials');
  await expect(errorLocator).toBeVisible({ timeout: 7000 });

  // Перевірка, що залишились на сторінці логіну
  await expect(page).toHaveURL(/sign-in/);
});
