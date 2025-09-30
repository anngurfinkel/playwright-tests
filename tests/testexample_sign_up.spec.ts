/*import { test, expect } from '@playwright/test';

test('sign_up', async ({ page }) => {
  await page.goto('https://platform.labelyourdata.com/sign-up/');

  // Заповнюємо форму реєстрації
  await page.getByTestId('sign-up-email').fill('hurfinkelannaqa@gmail.com');
  await page.getByTestId('sign-up-username').fill('client_test1');
  await page.getByTestId('sign-up-password').fill('Fjik67%ips');
  await page.getByTestId('sign-up-confirm_password').fill('Fjik67%ips');

  // Натискаємо кнопку Sign up та чекаємо навігації (повного завантаження)
  await Promise.all([
    page.waitForNavigation({ waitUntil: 'networkidle' }),
    page.locator('button[form="signup-form"]').click(),
  ]);

  // Очікуємо, що після реєстрації URL перейде на сторінку підтвердження email
  await expect(page).toHaveURL(/confirm-email/i, { timeout: 10000 });

  // Перевірка, що на сторінці є заголовок "Confirm your email"
  await expect(page.getByRole('heading', { name: /confirm your email/i })).toBeVisible();
});
*/