import { test, expect } from '@playwright/test';

test('terms_of_use', async ({ page }) => {
  await page.goto('https://platform.labelyourdata.com/sign-in');

  // Заповнюємо логін і пароль без зайвих кліків
  await page.getByTestId('sign-in-username').fill('client_test1');
  await page.getByTestId('sign-in-password').fill('Fjik67%ips');

  // Клікаємо кнопку входу та чекаємо на навігацію
  await Promise.all([
    page.waitForNavigation({ waitUntil: 'networkidle' }),
    page.getByTestId('sign-in-btn').click(),
  ]);

  // Клікаємо перший елемент із текстом 'CL' (ініціали користувача)
  const userInitials = page.getByText('CL').first();
  await expect(userInitials).toBeVisible();
  await userInitials.click();

  // Клікаємо посилання "Terms of use" та чекаємо навігації
  const termsLink = page.getByRole('link', { name: 'Terms of use' });
  await expect(termsLink).toBeVisible();
  await Promise.all([
    page.waitForNavigation({ waitUntil: 'networkidle' }),
    termsLink.click(),
  ]);

  // Перевіряємо, що URL містить 'terms-of-use'
  await expect(page).toHaveURL(/terms-of-use/i, { timeout: 10000 });

  // Перевіряємо, що на сторінці є текст "Terms of use"
  await expect(page.getByText(/terms of use/i)).toBeVisible({ timeout: 10000 });
});
