/* import { test, expect } from '@playwright/test';

test('job_title', async ({ page }) => {
  await page.goto('https://platform.labelyourdata.com/sign-in');
  await page.waitForLoadState('networkidle');

  const usernameInput = page.locator('[data-testid="sign-in-username"]');
  const passwordInput = page.locator('[data-testid="sign-in-password"]');
  const signInButton = page.locator('[data-testid="sign-in-btn"]');

  await expect(usernameInput).toBeVisible();
  await expect(passwordInput).toBeVisible();

  await usernameInput.fill('client_test1');
  await passwordInput.fill('Fjik67%ips');

  // Click sign-in and wait for navigation
  await Promise.all([
    page.waitForNavigation({ waitUntil: 'networkidle' }),
    signInButton.click(),
  ]);

  // Locate the Machine Learning button — fallback: using text with emoji might be flaky
  const mlButton = page.getByText('🧑‍💻 Machine Learning', { exact: true });
  await expect(mlButton).toBeVisible({ timeout: 10000 });
  await mlButton.click();

  // Wait for Confirm button and click it
  const confirmButton = page.getByRole('button', { name: 'Confirm' });
  await expect(confirmButton).toBeVisible({ timeout: 10000 });
  await confirmButton.click();

  // Optional: add assertion here for confirmation success
  // e.g., await expect(page.locator('selector-for-success-message')).toBeVisible();
});
*/