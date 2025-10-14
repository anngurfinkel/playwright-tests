import { test, expect } from '@playwright/test';

test('contact_us', async ({ page }) => {
  await page.goto('https://platform.labelyourdata.com/sign-in');
  await page.getByTestId('sign-in-username').click();
  await page.getByTestId('sign-in-username').fill('client_test1');
  await page.getByTestId('sign-in-password').click();
  await page.getByTestId('sign-in-password').fill('Fjik67%ips');
  await page.getByTestId('sign-in-btn').click();
  await page.getByText('CL').first().click();
  await page.getByRole('link', { name: 'Contact Us' }).click();
  await page.getByRole('textbox', { name: 'e.g. I’m looking to set up' }).click();
  await page.getByRole('textbox', { name: 'e.g. I’m looking to set up' }).fill('contact_test-1410');
  await page.getByTestId('contact_us_confirm').click();
});