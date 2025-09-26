import { test, expect } from '@playwright/test';

test('1234', async ({ page }) => {
  await page.goto('https://platform.labelyourdata.com/sign-up');
  await page.getByRole('heading', { name: 'Sign up to Label Your Data' }).click();
});
