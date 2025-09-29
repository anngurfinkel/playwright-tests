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

  // Чекаємо навігацію, поки натискаємо кнопку
  await Promise.all([
    page.waitForNavigation({ waitUntil: 'networkidle' }),
    signInButton.click(),
  ]);

  const userInitials = page.getByText('CL').first();
  await expect(userInitials).toBeVisible({ timeout: 10000 });
  await userInitials.click();

  const loyaltyLink = page.getByRole('link', { name: 'Loyalty program Starter' });
  await expect(loyaltyLink).toBeVisible({ timeout: 10000 });

  // Клік з очікуванням навігації (якщо переходить на іншу сторінку)
  await Promise.all([
    page.waitForNavigation({ waitUntil: 'networkidle' }),
    loyaltyLink.click(),
  ]);

  // Тут можна додати перевірку, що завантажилась сторінка лояльності
  // наприклад, перевірити заголовок або якийсь унікальний елемент:
  // await expect(page.locator('selector-for-loyalty-page-element')).toBeVisible();
});
