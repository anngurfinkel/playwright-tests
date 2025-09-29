import { test, expect } from '@playwright/test';

test('rewards program flow', async ({ page }) => {
  await page.goto('https://platform.labelyourdata.com/sign-in');

  // Заповнюємо username
  const usernameInput = page.getByTestId('sign-in-username');
  await expect(usernameInput).toBeVisible({ timeout: 5000 });
  await usernameInput.fill('client_test1');

  // Заповнюємо password
  const passwordInput = page.getByTestId('sign-in-password');
  await expect(passwordInput).toBeVisible({ timeout: 5000 });
  await passwordInput.fill('Fjik67%ips');

  // Клік на кнопку входу і очікування навігації з повним завантаженням
  await Promise.all([
    page.waitForNavigation({ waitUntil: 'networkidle' }),
    page.getByTestId('sign-in-btn').click(),
  ]);

  // Клік по першому елементу з текстом 'CL' (ініціали користувача)
  const clElement = page.getByText('CL').first();
  await expect(clElement).toBeVisible({ timeout: 10000 });
  await clElement.click();

  // Переходимо в Organization management (очікуємо видимість і клікаємо)
  const orgManagementLink = page.getByRole('link', { name: 'Organization management' });
  await expect(orgManagementLink).toBeVisible({ timeout: 10000 });

  await Promise.all([
    page.waitForNavigation({ waitUntil: 'networkidle' }),
    orgManagementLink.click(),
  ]);

  // Клік на вкладку rewards program
  const rewardsTab = page.getByTestId('tab-rewards-program');
  await expect(rewardsTab).toBeVisible({ timeout: 5000 });
  await rewardsTab.click();

  // За бажанням: перевірка контенту вкладки
  // await expect(page.getByTestId('rewards-program-content')).toBeVisible({ timeout: 5000 });
});
