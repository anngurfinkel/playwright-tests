import { test, expect } from '@playwright/test';

test('need_external_app', async ({ page }) => {
  await page.goto('https://platform.labelyourdata.com/sign-in');

  await page.getByTestId('sign-in-username').fill('client_test1');
  await page.getByTestId('sign-in-password').fill('Fjik67%ips');
  await page.getByTestId('sign-in-btn').click();

  await page.getByTestId('card_title').click();

  // ✅ FIX: Click the actual dropdown container, not the SVG <rect>
  await page.getByTestId('ui_dropdown_title').click();

  await page.getByText('Need external API?').click();

  const messageBox = page.getByRole('textbox', {
    name: 'e.g. I’m looking to set up',
  });
  await messageBox.fill('need external app 123');

  await page.getByTestId('contact_us_confirm').click();

  await page.locator('#portal_root div').nth(2).click();
  await page.locator('#portal_root span').getByRole('img').click();
});
