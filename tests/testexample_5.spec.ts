import { test, expect } from '@playwright/test';

test('job_title', async ({ page }) => {
  await page.goto('https://platform.labelyourdata.com/sign-in');
  
  // Перевіряємо, чи елементи доступні перед виконанням
  await expect(page.locator('[data-testid="sign-in-username"]')).toBeVisible();
  await expect(page.locator('[data-testid="sign-in-password"]')).toBeVisible();
  
  // Вводимо логін та пароль
  await page.getByTestId('sign-in-username').click();
  await page.getByTestId('sign-in-username').fill('client_test1');
  await page.getByTestId('sign-in-password').click();
  await page.getByTestId('sign-in-password').fill('Fjik67%ips');
  await page.getByTestId('sign-in-btn').click();
  
  // Перевіряємо, чи є кнопка "Machine Learning"
  await expect(page.getByText('🧑‍💻 Machine Learning')).toBeVisible();
  await page.getByText('🧑‍💻 Machine Learning').click();
  
  // Перевіряємо, чи є кнопка підтвердження
  await expect(page.getByRole('button', { name: 'Confirm' })).toBeVisible();
  await page.getByRole('button', { name: 'Confirm' }).click();
});
