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
  await Promise.all([
    page.waitForNavigation(),
    contactUsLink.click(),
  ]);

  // Якщо "e.g. I’m looking to set up" - це placeholder, краще так:
  const messageBox = page.getByPlaceholder('e.g. I’m looking to set up');
  await expect(messageBox).toBeVisible();
  await messageBox.fill('test117');

  await page.getByTestId('contact_us_confirm').click();

  // Краще клікати на більш надійний селектор, наприклад кнопку, а не path в SVG
  const closeButton = page.locator('#portal_root button'); // припустимо, що це кнопка
  await expect(closeButton).toBeVisible();
  await closeButton.click();
});
