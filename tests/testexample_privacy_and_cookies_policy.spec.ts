import { test, expect } from '@playwright/test';

test('privacy_policy', async ({ page }) => {
  await page.goto('https://platform.labelyourdata.com/sign-in');

  // Login
  await page.getByTestId('sign-in-username').fill('client_test1');
  await page.getByTestId('sign-in-password').fill('Fjik67%ips');
  await page.getByTestId('sign-in-btn').click();

  // Wait for Dashboard link as post-login indicator
  const dashboardLink = page.getByRole('link', { name: 'Dashboard' });
  await expect(dashboardLink).toBeVisible({ timeout: 10000 });

  // Open user menu (disambiguated)
  const userMenuTrigger = page.locator('.header_widget_main', { hasText: 'CL' });
  await expect(userMenuTrigger).toBeVisible();
  await userMenuTrigger.click();

  // Click Privacy and cookies policy
  const policyLink = page.getByRole('link', { name: /privacy and cookies policy/i });
  await expect(policyLink).toBeVisible({ timeout: 5000 });
  await Promise.all([
    page.waitForNavigation(), // <- Wait for navigation
    policyLink.click(),
  ]);

  // Final assertion: check that we are on the correct page
  await expect(page).toHaveURL(/privacy/i);

  // Optional: check if page contains relevant content (if <h1> is unreliable)
  await expect(page.locator('body')).toContainText(/privacy|cookies/i);
});
