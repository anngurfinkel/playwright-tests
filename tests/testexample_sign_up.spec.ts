import { test, expect } from '@playwright/test';

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
    page.getByRole('button', { name: 'Sign up' }).click(),
  ]);

  // Перевірка, що після реєстрації URL містить dashboard, welcome або success
  await expect(page).toHaveURL(/dashboard|welcome|success/i, { timeout: 10000 });

  // Якщо є повідомлення про успішну реєстрацію, можна додати перевірку
  // await expect(page.getByText(/welcome|thank you for registering/i)).toBeVisible();
});
