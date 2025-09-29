import { test, expect } from '@playwright/test';

test('privacy_and_cookies_policy', async ({ page }) => {
  await page.goto('https://platform.labelyourdata.com/sign-in');

  const usernameInput = page.getByTestId('sign-in-username');
  const passwordInput = page.getByTestId('sign-in-password');
  const signInButton = page.getByTestId('sign-in-btn');

  await expect(usernameInput).toBeVisible({ timeout: 5000 });
  await expect(passwordInput).toBeVisible({ timeout: 5000 });

  await usernameInput.fill('client_test1');
  await passwordInput.fill('Fjik67%ips');

  // Клік по кнопці входу і очікування повної навігації
  await Promise.all([
    page.waitForNavigation({ waitUntil: 'networkidle' }),
    signInButton.click(),
  ]);

  // Чекаємо появу ініціалів користувача і клікаємо
  const userInitials = page.getByText('CL').first();
  await expect(userInitials).toBeVisible({ timeout: 10000 });
  await userInitials.click();

  // Знаходимо посилання "Privacy and cookies policy"
  const privacyLink = page.getByRole('link', { name: 'Privacy and cookies policy' });
  await expect(privacyLink).toBeVisible({ timeout: 5000 });

  // Клікаємо і чекаємо навігацію, якщо вона є
  await Promise.all([
    page.waitForNavigation({ waitUntil: 'networkidle' }).catch(() => {}), // на випадок, якщо немає навігації
    privacyLink.click(),
  ]);
});
