import { test, expect } from '@playwright/test';

test('terms_of_use', async ({ page }) => {
  await page.goto('https://platform.labelyourdata.com/sign-in');

  await page.getByTestId('sign-in-username').fill('client_test1');
  await page.getByTestId('sign-in-password').fill('Fjik67%ips');
  await page.getByTestId('sign-in-btn').click();

  const userInitials = page.getByText('CL').first();
  await expect(userInitials).toBeVisible({ timeout: 10000 });
  await userInitials.click();

  const termsLink = page.getByRole('link', { name: 'Terms of use' });
  await expect(termsLink).toBeVisible({ timeout: 10000 });

  // Клік по посиланню + чекати або навігацію (reload), або зміну URL (SPA)
  const [response] = await Promise.all([
    page.waitForNavigation({ waitUntil: 'networkidle' }).catch(() => null), // ловимо помилку, якщо не буде навігації
    termsLink.click(),
  ]);

  if (!response) {
    // Якщо навігації не було, чекаємо зміну URL (SPA)
    await expect(page).toHaveURL(/terms-of-use/i, { timeout: 10000 });
  }

  // Переконуємось, що сторінка з Terms of use відображається
  await expect(page.getByText(/terms of use/i)).toBeVisible({ timeout: 10000 });
});
