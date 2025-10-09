import { test, expect } from '@playwright/test';

test('terms_of_use', async ({ page }) => {
  await page.goto('https://platform.labelyourdata.com/sign-up');

  const [termsPage] = await Promise.all([
    page.waitForEvent('popup'),
    page.getByRole('link', { name: 'Terms and conditions' }).click(),
  ]);

  await termsPage.waitForLoadState();
  await expect(termsPage).toHaveURL(/\/terms-of-use$/);
});
