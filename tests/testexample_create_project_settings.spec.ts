import { test, expect } from '@playwright/test';

test('create_project_settings', async ({ page }) => {
  await page.goto('https://platform.labelyourdata.com/sign-in');

  // Sign in
  await page.getByTestId('sign-in-username').fill('client_test1');
  await page.getByTestId('sign-in-password').fill('Fjik67%ips');
  await page.getByTestId('sign-in-btn').click();

  // ✅ Wait for post-login confirmation (e.g. "New Project" button is visible)
  await expect(page.getByRole('button', { name: 'New Project' })).toBeVisible({ timeout: 10000 });

  // Click the "New Project" button
  await page.getByRole('button', { name: 'New Project' }).click();

  // Go to "Contact Us"
  await page.getByRole('link', { name: 'Contact Us' }).click();

  // Fill in the contact form
  await page.getByPlaceholder('e.g. I’m looking to set up').fill('create project settings 123');

  // Submit the contact form
  await page.getByTestId('contact_us_confirm').click();

  // ✅ Close the modal safely — check visibility first
  const closeButton = page.locator('#portal_root [aria-label="Close"], #portal_root [role="img"]');

  if (await closeButton.first().isVisible()) {
    await closeButton.first().click();
  }
});