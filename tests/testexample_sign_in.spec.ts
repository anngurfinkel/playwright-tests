import { test, expect } from '@playwright/test';

test('sign_in', async ({ page }) => {
  await page.goto('https://platform.labelyourdata.com/sign-in');

  // Заповнюємо username і password без зайвих кліків
  await page.getByTestId('sign-in-username').fill('client_test');
  await page.getByTestId('sign-in-password').fill('Fjik67%ips');

  // Натискаємо кнопку входу і очікуємо навігацію з повним завантаженням
  await Promise.all([
    page.waitForNavigation({ waitUntil: 'networkidle' }),
    page.getByTestId('sign-in-btn').click(),
  ]);

  // Перевірка, що користувач увійшов — наприклад, наявність ініціалів користувача 'CL'
  const userInitials = page.getByText('CL').first();
  await expect(userInitials).toBeVisible({ timeout: 10000 });
});
