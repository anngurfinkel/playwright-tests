/* import { test, expect } from '@playwright/test';

test('project_instruction', async ({ page }) => {
  await page.goto('https://platform.labelyourdata.com/sign-in');

  const usernameInput = page.getByTestId('sign-in-username');
  const passwordInput = page.getByTestId('sign-in-password');
  const signInButton = page.getByTestId('sign-in-btn');

  await expect(usernameInput).toBeVisible();
  await expect(passwordInput).toBeVisible();

  await usernameInput.fill('client_test1');
  await passwordInput.fill('Fjik67%ips');

  await Promise.all([
    page.waitForNavigation(),
    signInButton.click(),
  ]);

  const cardTitle = page.getByTestId('card_title');
  await expect(cardTitle).toBeVisible();
  await cardTitle.click();

  const dropdownTitle = page.getByTestId('ui_dropdown_title');
  await expect(dropdownTitle).toBeVisible();
  await dropdownTitle.click();  // Click container, safer than 'rect'

  const portalRoot = page.locator('#portal_root');
  await portalRoot.waitFor({ state: 'visible', timeout: 10000 });

  const image = portalRoot.getByRole('img');
  await expect(image).toBeVisible();
  await image.click();
});
*/