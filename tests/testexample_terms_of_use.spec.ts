import { test, expect } from '@playwright/test';

test('terms_of_use', async ({ page }) => {
  await page.goto('https://platform.labelyourdata.com/sign-in');

  await page.getByTestId('sign-in-username').fill('client_test1');
  await page.getByTestId('sign-in-password').fill('Fjik67%ips');
  await page.getByTestId('sign-in-btn').click();

  const userInitials = page.getByText('CL').first();
  await expect(userInitials).toBeVisible({ timeout: 15000 });
  await userInitials.click();

  const termsLink = page.getByRole('link', { name: 'Terms of use' });
  await expect(termsLink).toBeVisible({ timeout: 5000 });

  // Якщо SPA-навігація (без reload)
  await termsLink.click();

  await expect(page).toHaveURL(/terms-of-use/i, { timeout: 10000 });
  await expect(page.getByText(/terms of use/i)).toBeVisible({ timeout: 10000 });
});
