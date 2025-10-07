import { test, expect } from '@playwright/test';

test('log_out', async ({ page }) => {
  await page.goto('https://platform.labelyourdata.com/sign-in');

  const usernameInput = page.getByTestId('sign-in-username');
  const passwordInput = page.getByTestId('sign-in-password');
  const signInButton = page.getByTestId('sign-in-btn');

  // Переконатися, що поля для введення видимі
  await expect(usernameInput).toBeVisible();
  await expect(passwordInput).toBeVisible();

  // Ввести логін і пароль
  await usernameInput.fill('client_test1');
  await passwordInput.fill('Fjik67%ips');

  // Натиснути кнопку "Sign In" і чекати завершення навігації
  await Promise.all([
    signInButton.click(),
    page.waitForNavigation({ waitUntil: 'networkidle' }),
  ]);

  // Чекати, що ініціали користувача з'явились і клікаємо по них (щоб відкрити меню)
  const userInitials = page.getByText('CL').first();
  await expect(userInitials).toBeVisible({ timeout: 10000 });
  await userInitials.click();

  // Чекати, що кнопка "Logout" видима і клікаємо по ній
  const logoutButton = page.getByTestId('logout_btn');
  await expect(logoutButton).toBeVisible({ timeout: 5000 });
  await logoutButton.click();

  // Почекати, що сторінка логіну знову відображається (впевнитись, що вийшли)
  await expect(signInButton).toBeVisible({ timeout: 10000 });
});
