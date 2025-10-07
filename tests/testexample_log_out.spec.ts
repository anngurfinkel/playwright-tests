import { test, expect } from '@playwright/test';

test('log_out', async ({ page }) => {
  await page.goto('https://platform.labelyourdata.com/sign-in');
  await page.getByTestId('sign-in-username').click();
  await page.getByTestId('sign-in-username').fill('client_test1');
  await page.getByTestId('sign-in-password').click();
  await page.getByTestId('sign-in-password').fill('Fjik67%ips');
  await page.getByTestId('sign-in-btn').click();
  await page.getByText('CL').first().click();
  await page.getByTestId('logout_btn').click();
  await page.goto('https://platform.labelyourdata.com/sign-in');
});