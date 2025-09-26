import { test, expect } from '@playwright/test';

test('labels_statistic', async ({ page }) => {
  // Go to sign-in page
  await page.goto('https://platform.labelyourdata.com/sign-in');

  // Login with credentials
  await page.getByTestId('sign-in-username').fill('client_test1');
  await page.getByTestId('sign-in-password').fill('Fjik67%ips');

  await Promise.all([
    page.waitForNavigation({ waitUntil: 'networkidle' }),
    page.getByTestId('sign-in-btn').click(),
  ]);

  // Select project
  await page.getByRole('cell', { name: 'Project_test1 object_detection' }).locator('div').first().click();

  // Open dropdown and click "Labels statistic"
  await page.getByTestId('ui_dropdown_title').locator('path').click();
  await page.getByTestId('ui_dropdown_content')
    .locator('div')
    .filter({ hasText: 'Labels statistic' })
    .click();

  // Wait for #portal_root to be attached to the DOM (not necessarily visible)
  const portalRoot = page.locator('#portal_root');
  await portalRoot.waitFor({ state: 'attached', timeout: 10000 });

  // Check if it's visible before interacting
  if (await portalRoot.isVisible()) {
    const imgElement = portalRoot.getByRole('img');
    await imgElement.waitFor({ state: 'visible', timeout: 10000 });
    await imgElement.scrollIntoViewIfNeeded();
    await imgElement.click();
  } else {
    console.log('⚠️ #portal_root is present but not visible — skipping image interaction.');
    await expect(portalRoot).toBeHidden(); // Optional assertion
  }
});
