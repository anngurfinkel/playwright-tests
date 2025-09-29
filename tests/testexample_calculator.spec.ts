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

  // Уточнений локатор заголовку, щоб не було strict mode violation:
  // наприклад, шукаємо h1 з точним текстом або використовуємо data-testid, якщо є
  const billingHeader = page.getByRole('heading', { name: 'Billing & payments', level: 1 });
  await expect(billingHeader).toBeVisible();
});
