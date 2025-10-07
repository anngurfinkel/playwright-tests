import { test, expect } from '@playwright/test';

test('calculator', async ({ page }) => {
  await page.goto('https://platform.labelyourdata.com/sign-in');

  await page.getByTestId('sign-in-username').fill('client_test1');
  await page.getByTestId('sign-in-password').fill('Fjik67%ips');
  await page.getByTestId('sign-in-btn').click();

  // Очікуємо, що з'явиться посилання 'Calculator' після успішного логіну
  const calculatorLink = page.getByRole('link', { name: 'Calculator' });
  await expect(calculatorLink).toBeVisible({ timeout: 10000 });

  // Клікаємо на посилання 'Calculator' і чекаємо переходу
  await Promise.all([
    calculatorLink.click(),
    page.waitForURL('**/calculator', { timeout: 30000 }),
  ]);

  // Перевірка, що URL містить '/calculator'
  await expect(page).toHaveURL(/calculator/);

  // Уточнений локатор заголовку
  const calculatorHeader = page.getByRole('heading', { name: 'Calculator', level: 1 });
  await expect(calculatorHeader).toBeVisible();
});
