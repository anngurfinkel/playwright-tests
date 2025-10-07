import { test, expect } from '@playwright/test';

test('billing', async ({ page }) => {
  await page.goto('https://platform.labelyourdata.com/sign-in');

  await page.getByTestId('sign-in-username').fill('client_test1');
  await page.getByTestId('sign-in-password').fill('Fjik67%ips');
  await page.getByTestId('sign-in-btn').click();

  // Очікуємо появу посилання 'Billing' після логіну
  const billingLink = page.getByRole('link', { name: 'Billing' });
  await expect(billingLink).toBeVisible({ timeout: 10000 });

  // Клікаємо і чекаємо, поки URL зміниться на потрібний (краще, ніж waitForNavigation)
  await Promise.all([
    billingLink.click(),
    page.waitForURL('**/billing', { timeout: 30000 }),
  ]);

  // Перевірка URL
  await expect(page).toHaveURL(/billing/);

  // Перевірка заголовку на сторінці billing
  const billingHeader = page.getByRole('heading', { name: 'Billing & payments', level: 1 });
  await expect(billingHeader).toBeVisible();
});
