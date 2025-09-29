import { test, expect } from '@playwright/test';

test('billing', async ({ page }) => {
  await page.goto('https://platform.labelyourdata.com/sign-in');

  await page.getByTestId('sign-in-username').fill('client_test1');
  await page.getByTestId('sign-in-password').fill('Fjik67%ips');
  await page.getByTestId('sign-in-btn').click();

  // Очікуємо, що з'явиться посилання 'Billing' після успішного логіну
  const billingLink = page.getByRole('link', { name: 'Billing' });
  await expect(billingLink).toBeVisible({ timeout: 10000 });

  // Клікаємо на посилання 'Billing' і чекаємо повного завантаження сторінки
  await Promise.all([
    page.waitForNavigation({ waitUntil: 'networkidle' }),
    billingLink.click()
  ]);

  // Перевірка, що URL містить '/billing' або подібне (заміни на актуальний шлях)
  await expect(page).toHaveURL(/billing/);

  // Перевірка заголовку з унікальним рівнем і точним текстом
  const billingHeader = page.getByRole('heading', { name: 'Billing & payments', level: 1 });
  await expect(billingHeader).toBeVisible();
});
