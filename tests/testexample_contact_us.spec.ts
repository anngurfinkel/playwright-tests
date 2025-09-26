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

  const messageBox = page.getByRole('textbox', { name: 'e.g. I’m looking to set up' });
  await expect(messageBox).toBeVisible();
  await messageBox.fill('test111');

  await page.getByTestId('contact_us_confirm').click();

  // Assuming this is a close button or similar, wait for visibility first
  const closeButton = page.locator('#portal_root span path');
  await expect(closeButton).toBeVisible();
  await closeButton.click();
});
