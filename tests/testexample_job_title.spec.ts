import { test, expect } from '@playwright/test';

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

  // Click and wait for navigation
  await Promise.all([
    page.waitForNavigation({ waitUntil: 'networkidle' }),
    signInButton.click(),
  ]);

  // Optional debug: list all buttons text on the page after login
  // console.log(await page.locator('button').allTextContents());

  const mlButton = page.getByText('🧑‍💻 Machine Learning');
  await mlButton.waitFor({ state: 'visible', timeout: 10000 });
  await mlButton.click();

  const confirmButton = page.getByRole('button', { name: 'Confirm' });
  await confirmButton.waitFor({ state: 'visible', timeout: 10000 });
  await confirmButton.click();
});
