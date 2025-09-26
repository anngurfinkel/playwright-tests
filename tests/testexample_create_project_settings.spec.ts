/* import { test, expect } from '@playwright/test';

test('create_project_settings', async ({ page }) => {
  await page.goto('https://platform.labelyourdata.com/sign-in');

  // Sign in
  await page.getByTestId('sign-in-username').fill('client_test1');
  await page.getByTestId('sign-in-password').fill('Fjik67%ips');
  await Promise.all([
    page.waitForNavigation(),
    page.getByTestId('sign-in-btn').click(),
  ]);

  // Wait for the "New Project" button to appear
  const newProjectButton = page.getByRole('button', { name: 'New Project' });
  await expect(newProjectButton).toBeVisible({ timeout: 10000 });

  // Click the "New Project" button
  await newProjectButton.click();

  // Click the "Contact Us" link and wait for navigation or modal
  const contactUsLink = page.getByRole('link', { name: 'Contact Us' });
  await Promise.all([
    page.waitForLoadState('networkidle'),
    contactUsLink.click(),
  ]);

  // Fill in the contact form
  const messageBox = page.getByPlaceholder('e.g. I’m looking to set up');
  await expect(messageBox).toBeVisible();
  await messageBox.fill('create project settings 123');

  // Submit the contact form
  await page.getByTestId('contact_us_confirm').click();

  // Close the modal safely — check visibility first
  const closeButton = page.locator('#portal_root [aria-label="Close"], #portal_root [role="img"]');
  if (await closeButton.count() > 0 && await closeButton.first().isVisible()) {
    await closeButton.first().click();
  }
});
*/