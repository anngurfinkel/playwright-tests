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

  // Якщо SPA, не чекати waitForNavigation, а чекати появи елементів після входу
  await signInButton.click();

  // Чекаємо появи ініціалів або іншого унікального елемента після логіну
  const userInitials = page.getByText('CL').first();
  await expect(userInitials).toBeVisible({ timeout: 15000 });
  await userInitials.click();

  const loyaltyLink = page.getByRole('link', { name: 'Loyalty program Starter' });
  await expect(loyaltyLink).toBeVisible({ timeout: 10000 });

  // Якщо переходить на іншу сторінку, чекати навігацію
  await Promise.all([
    page.waitForNavigation({ waitUntil: 'networkidle' }),
    loyaltyLink.click(),
  ]);

  const loyaltyHeader = page.getByRole('heading', { name: 'Loyalty program Starter' });
  await expect(loyaltyHeader).toBeVisible({ timeout: 20000 });
});
