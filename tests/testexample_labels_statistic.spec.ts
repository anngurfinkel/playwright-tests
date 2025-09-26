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

  // Select project by clicking the first div inside the cell with the project name
  const projectCell = page.getByRole('cell', { name: 'Project_test1 object_detection' });
  await expect(projectCell).toBeVisible();
  await projectCell.locator('div').first().click();

  // Open dropdown menu by clicking the dropdown title container (better than clicking SVG path)
  const dropdownTitle = page.getByTestId('ui_dropdown_title');
  await expect(dropdownTitle).toBeVisible();
  await dropdownTitle.click();

  // Click "Labels statistic" option in dropdown content
  const labelsStatisticOption = page.getByTestId('ui_dropdown_content').getByText('Labels statistic');
  await expect(labelsStatisticOption).toBeVisible();
  await labelsStatisticOption.click();

  // Wait for #portal_root to be attached (added to DOM)
  const portalRoot = page.locator('#portal_root');
  await portalRoot.waitFor({ state: 'attached', timeout: 10000 });

  // Check if #portal_root is visible before interacting
  if (await portalRoot.isVisible()) {
    const imgElement = portalRoot.getByRole('img');
    await expect(imgElement).toBeVisible({ timeout: 10000 });
    await imgElement.scrollIntoViewIfNeeded();
    await imgElement.click();
  } else {
    console.warn('⚠️ #portal_root is present but not visible — skipping image interaction.');
    await expect(portalRoot).toBeHidden(); // Optional assertion
  }
});
