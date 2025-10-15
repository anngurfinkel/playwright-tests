/* import { test, expect } from '@playwright/test';

test('create_project_settings', async ({ page }) => {
  // ⏱ Збільшуємо загальний таймаут на тест (до 60 секунд)
  test.setTimeout(60000);

  // 🔐 Перехід на сторінку логіну
  await page.goto('https://platform.labelyourdata.com/sign-in');

  // 🔑 Заповнення логіну
  await page.getByTestId('sign-in-username').fill('client_test1');
  await page.getByTestId('sign-in-password').fill('Fjik67%ips');
  await page.getByTestId('sign-in-btn').click();

  // ⏳ Очікування на появу кнопки створення проєкту
  const createProjectBtn = page.getByTestId('dashboard_empty_create_project');
  await expect(createProjectBtn).toBeVisible({ timeout: 15000 });

  // ➕ Клік на створення проєкту
  await createProjectBtn.click();

  // ⏳ Очікуємо на "Contact Us" лінк і клікаємо
  const contactUsLink = page.getByRole('link', { name: 'Contact Us' });
  await expect(contactUsLink).toBeVisible({ timeout: 10000 });
  await contactUsLink.click();

  // 📝 Вводимо текст у текстове поле
  const contactMessage = page.getByRole('textbox', {
    name: /e\.g\. I’m looking to set up/i,
  });
  await expect(contactMessage).toBeVisible({ timeout: 10000 });
  await contactMessage.click();
  await contactMessage.fill('Create project test 1410');

  // 📩 Натискаємо підтвердження
  const confirmButton = page.getByTestId('contact_us_confirm');
  await expect(confirmButton).toBeVisible({ timeout: 10000 });
  await confirmButton.click();

  // 🧪 Перевірка, що підтвердження пройшло (опційно: додай, якщо знаєш елемент, який з’являється після)
  // await expect(page.locator('text=Thank you')).toBeVisible();
});
*/