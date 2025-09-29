import { test, expect } from '@playwright/test';

test('cloud_storage', async ({ page }) => {
  await page.goto('https://platform.labelyourdata.com/sign-in');

  // Заповнюємо логін та пароль
  await page.getByTestId('sign-in-username').fill('client_test1');
  await page.getByTestId('sign-in-password').fill('Fjik67%ips');

  // Клікаємо "Sign In" і чекаємо навігацію
  await Promise.all([
    page.waitForNavigation({ waitUntil: 'networkidle' }),
    page.getByTestId('sign-in-btn').click(),
  ]);

  // Клікаємо по ініціалах користувача 'CL'
  const userInitials = page.getByText('CL').first();
  await expect(userInitials).toBeVisible({ timeout: 10000 });
  await userInitials.click();

  // Клікаємо на "Organization management" і чекаємо навігацію
  const orgManagementLink = page.getByRole('link', { name: 'Organization management' });
  await Promise.all([
    page.waitForNavigation({ waitUntil: 'networkidle' }),
    orgManagementLink.click(),
  ]);

  // Клікаємо на вкладку "Cloud Storage"
  const cloudStorageTab = page.getByTestId('tab-cloud-storage');
  await cloudStorageTab.click();

  // Перевіряємо, що вкладка активна
  await expect(cloudStorageTab).toHaveClass(/active/);
});
