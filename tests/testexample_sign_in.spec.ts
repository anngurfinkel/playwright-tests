import { test, expect } from '@playwright/test';

test('sign_in', async ({ page }) => {
  await page.goto('https://platform.labelyourdata.com/sign-in');

  // Fill username and password without extra clicks
  await page.getByTestId('sign-in-username').fill('client_test');
  await page.getByTestId('sign-in-password').fill('Fjik67%ips');

  // Click sign-in button and wait for navigation or expected element
  await Promise.all([
    page.waitForNavigation(),
    page.getByTestId('sign-in-btn').click(),
  ]);

  // Optionally, assert that user is logged in
  // For example, check that a logout button or user profile element is visible
  // await expect(page.getByTestId('user-profile')).toBeVisible();
});
