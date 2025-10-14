import { test, expect } from '@playwright/test';

test('required_fields', async ({ page }) => {
  await page.goto('https://platform.labelyourdata.com/sign-up');
  await page.getByRole('button', { name: 'Sign up', exact: true }).click();

  await expect(page.locator('text=Email is required', { exact: true })).toBeVisible();
  await expect(page.locator('text=User Name is required', { exact: true })).toBeVisible();

  // Використовуємо регулярний вираз для точного співпадіння тексту
  await expect(page.locator('text=/^Password is required$/')).toBeVisible();
  await expect(page.locator('text=/^Confirm password is required$/')).toBeVisible();
});
