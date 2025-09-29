import { test, expect } from '@playwright/test';

test('organization_management', async ({ page }) => {
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

  // Чекаємо на появу ініціалів користувача і клікаємо по ним
  const userInitials = page.getByText('CL').first();
  await expect(userInitials).toBeVisible({ timeout: 10000 });
  await userInitials.click();

  // Знаходимо і клікаємо посилання "Organization management"
  const orgManagementLink = page.getByRole('link', { name: 'Organization management' });
  await expect(orgManagementLink).toBeVisible({ timeout: 5000 });

  // Очікуємо навігацію після кліку
  await Promise.all([
    page.waitForNavigation({ waitUntil: 'networkidle' }),
    orgManagementLink.click(),
  ]);
});
