import { test, expect } from '@playwright/test';

test('need_external_app', async ({ page }) => {
  await page.goto('https://platform.labelyourdata.com/sign-in');

  // Fill sign-in form
  const usernameInput = page.getByTestId('sign-in-username');
  const passwordInput = page.getByTestId('sign-in-password');
  const signInButton = page.getByTestId('sign-in-btn');

  await expect(usernameInput).toBeVisible();
  await expect(passwordInput).toBeVisible();

  await usernameInput.fill('client_test1');
  await passwordInput.fill('Fjik67%ips');

  // Click sign in and wait for navigation
  await Promise.all([
    page.waitForNavigation(),
    signInButton.click(),
  ]);

  // Click the card title
  const cardTitle = page.getByTestId('card_title');
  await expect(cardTitle).toBeVisible();
  await cardTitle.click();

  // Click the dropdown container (not the SVG rect)
  const dropdownTitle = page.getByTestId('ui_dropdown_title');
  await expect(dropdownTitle).toBeVisible();
  await dropdownTitle.click();

  // Click "Need external API?" option
  const needExternalAPI = page.getByText('Need external API?');
  await expect(needExternalAPI).toBeVisible();
  await needExternalAPI.click();

  // Fill message box
  const messageBox = page.getByRole('textbox', { name: 'e.g. I’m looking to set up' });
  await expect(messageBox).toBeVisible();
  await messageBox.fill('need external app 123');

  // Submit contact form
  const confirmButton = page.getByTestId('contact_us_confirm');
  await expect(confirmButton).toBeVisible();
  await confirmButton.click();

  // Close modal/dialog safely
  const portalRoot = page.locator('#portal_root');
  await portalRoot.waitFor({ state: 'attached', timeout: 10000 });

  const closeDiv = portalRoot.locator('div').nth(2);
  if (await closeDiv.isVisible()) {
    await closeDiv.click();
  }

  const closeImg = portalRoot.locator('span').getByRole('img');
  if (await closeImg.isVisible()) {
    await closeImg.click();
  }
});
