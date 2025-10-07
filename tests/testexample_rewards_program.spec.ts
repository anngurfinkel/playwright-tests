import { test, expect } from '@playwright/test';

test('loyalty_program', async ({ page }) => {
  await page.goto('https://platform.labelyourdata.com/sign-in');

  const usernameInput = page.getByTestId('sign-in-username');
  const passwordInput = page.getByTestId('sign-in-password');
  const signInButton = page.getByTestId('sign-in-btn');

  await expect(usernameInput).toBeVisible({ timeout: 5000 });
  await expect(passwordInput).toBeVisible({ timeout: 5000 });

  await usernameInput.fill('client_test1');
  await passwordInput.fill('Fjik67%ips');

  // Чекаємо навігацію після кліку на кнопку входу
  await Promise.all([
    page.waitForNavigation({ waitUntil: 'networkidle' }),
    signInButton.click(),
  ]);

  const userInitials = page.getByText('CL').first();
  await expect(userInitials).toBeVisible({ timeout: 10000 });
  await userInitials.click();

  const loyaltyLink = page.getByRole('link', { name: 'Loyalty program Starter' });
  await expect(loyaltyLink).toBeVisible({ timeout: 10000 });

  // Клік і очікування навігації (якщо сторінка змінюється)
  await Promise.all([
    page.waitForNavigation({ waitUntil: 'networkidle' }),
    loyaltyLink.click(),
  ]);

  // Перевіряємо, що заголовок з текстом є видимим (без рівня заголовку)
  const loyaltyHeader = page.getByRole('heading', { name: 'Loyalty program Starter' });
  await expect(loyaltyHeader).toBeVisible({ timeout: 20000 });
});
