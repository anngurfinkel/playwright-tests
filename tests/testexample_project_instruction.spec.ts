import { test, expect } from '@playwright/test';

test('project_instruction', async ({ page }) => {
  await page.goto('https://platform.labelyourdata.com/sign-in');
  await page.getByTestId('sign-in-username').click();
  await page.getByTestId('sign-in-username').fill('client_test1');
  await page.getByTestId('sign-in-password').click();
  await page.getByTestId('sign-in-password').fill('Fjik67%ips');
  await page.getByTestId('sign-in-btn').click();
  await page.getByTestId('card_title').click();
  await page.getByTestId('ui_dropdown_title').locator('rect').click();
  await page.locator('#portal_root').getByRole('img').click();
});