import { test, expect } from '@playwright/test';

test('calculator', async ({ page }) => {
  await page.goto('https://platform.labelyourdata.com/sign-in');

  await page.getByTestId('sign-in-username').fill('client_test1');
  await page.getByTestId('sign-in-password').fill('Fjik67%ips');
  await page.getByTestId('sign-in-btn').click();

  // Чекаємо, що посилання "Calculator" з'явиться
  const calculatorLink = page.getByRole('link', { name: 'Calculator' });
  await expect(calculatorLink).toBeVisible({ timeout: 10000 });

  // Клікаємо по посиланню і чекаємо на зміну URL (на сторінку калькулятора)
  await Promise.all([
    page.waitForURL('**/calculator'), // замініть на правильний шлях, якщо інший
    calculatorLink.click(),
  ]);

  // Перевіряємо, що URL дійсно змінився на сторінку калькулятора
  await expect(page).toHaveURL(/calculator/);
});
