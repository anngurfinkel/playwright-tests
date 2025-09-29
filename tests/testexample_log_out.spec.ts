import { test, expect } from '@playwright/test';

test('log_out', async ({ page }) => {
  await page.goto('https://platform.labelyourdata.com/sign-in');

  const usernameInput = page.getByTestId('sign-in-username');
  const passwordInput = page.getByTestId('sign-in-password');
  const signInButton = page.getByTestId('sign-in-btn');

  await expect(usernameInput).toBeVisible();
  await expect(passwordInput).toBeVisible();

  await usernameInput.fill('client_test1');
  await passwordInput.fill('Fjik67%ips');

  // Click sign in and wait for navigation, чекати мережеву активність для надійності
  await Promise.all([
    page.waitForNavigation({ waitUntil: 'networkidle' }),
    signInButton.click(),
  ]);

  // Чекати, що ініціали користувача видимі і клікати
  const userInitials = page.getByText('CL').first();
  await expect(userInitials).toBeVisible({ timeout: 10000 });
  await userInitials.click();

  // Чекати і клікати кнопку виходу
  const logoutButton = page.getByTestId('logout_btn');
  await expect(logoutButton).toBeVisible({ timeout: 5000 });
  await logoutButton.click();

  // Почекати, що повернулися на сторінку логіну
  await expect(signInButton).toBeVisible({ timeout: 10000 });
});
