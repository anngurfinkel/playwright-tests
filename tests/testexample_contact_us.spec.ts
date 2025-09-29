import { test, expect } from '@playwright/test';

test('contact_us', async ({ page }) => {
  await page.goto('https://platform.labelyourdata.com/sign-in');

  await page.getByTestId('sign-in-username').fill('client_test1');
  await page.getByTestId('sign-in-password').fill('Fjik67%ips');
  
  await Promise.all([
    page.waitForNavigation(),
    page.getByTestId('sign-in-btn').click(),
  ]);

  const userInitials = page.getByText('CL').first();
  await expect(userInitials).toBeVisible();
  await userInitials.click();

  const contactUsLink = page.getByRole('link', { name: 'Contact Us' });
  await contactUsLink.click();

  // Чекаємо, поки з'явиться форма або модалка "Contact Us"
  const messageBox = page.getByPlaceholder('e.g. I’m looking to set up');
  await expect(messageBox).toBeVisible();

  await messageBox.fill('test117');

  await page.getByTestId('contact_us_confirm').click();

  // Додаткові кроки якщо потрібно
});
