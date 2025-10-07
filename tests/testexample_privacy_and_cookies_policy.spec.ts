import { test, expect } from '@playwright/test';

test('privacy_and_cookies_policy', async ({ page }) => {
  await page.goto('https://platform.labelyourdata.com/sign-in');

  const usernameInput = page.getByTestId('sign-in-username');
  const passwordInput = page.getByTestId('sign-in-password');
  const signInButton = page.getByTestId('sign-in-btn');

  await expect(usernameInput).toBeVisible({ timeout: 5000 });
  await expect(passwordInput).toBeVisible({ timeout: 5000 });

  await usernameInput.fill('client_test1');
  await passwordInput.fill('Fjik67%ips');

  // Click sign-in without waiting for navigation (likely SPA login)
  await signInButton.click();

  // Wait explicitly for an element that confirms login success
  const userInitials = page.getByText('CL').first();
  await expect(userInitials).toBeVisible({ timeout: 15000 });
  await userInitials.click();

  const privacyLink = page.getByRole('link', { name: 'Privacy and cookies policy' });
  await expect(privacyLink).toBeVisible({ timeout: 5000 });

  // Click and wait for navigation only if it actually happens
  await Promise.all([
    page.waitForNavigation({ waitUntil: 'networkidle' }).catch(() => {}), // ignore if no navigation
    privacyLink.click(),
  ]);
});
