import { test, expect } from '@playwright/test';

test('api_keys', async ({ page }) => {
  await page.goto('https://platform.labelyourdata.com/sign-in');

  await page.getByTestId('sign-in-username').fill('client_test1');
  await page.getByTestId('sign-in-password').fill('Fjik67%ips');
  await page.getByTestId('sign-in-btn').click();

  // Чекаємо, поки з'являться унікальні ініціали користувача — обираємо перший елемент з текстом 'CL'
  const userInitials = page.getByText('CL').first();
  await expect(userInitials).toBeVisible({ timeout: 10000 });
  await userInitials.click();

  // Чекаємо, що з'явиться посилання Organization management і клікаємо
  const orgManagementLink = page.getByRole('link', { name: 'Organization management' });
  await expect(orgManagementLink).toBeVisible({ timeout: 10000 });

  await Promise.all([
    page.waitForNavigation({ waitUntil: 'networkidle' }),
    orgManagementLink.click()
  ]);

  // Перевіряємо, що ми на правильній сторінці (URL містить /organization)
  await expect(page).toHaveURL(/organization/);

  // Клікаємо на вкладку API
  const apiTab = page.getByTestId('tab-api');
  await expect(apiTab).toBeVisible();
  await apiTab.click();

  // Перевіряємо, що вкладка активна (перевірка класів, які можуть позначати активний стан)
  await expect(apiTab).toHaveClass(/active|is-active|selected/);
});
