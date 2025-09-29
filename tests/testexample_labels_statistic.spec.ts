/*import { test, expect } from '@playwright/test';

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

  // Select project row by text, а не просто cell, це точніше
  const projectRow = page.getByRole('row', { name: /Project_test1 object_detection/i });
  await expect(projectRow).toBeVisible({ timeout: 10000 });
  // Клікнемо по всьому рядку, це безпечніше, ніж див
  await projectRow.click();

  // Open dropdown menu by clicking the dropdown title container
  const dropdownTitle = page.getByTestId('ui_dropdown_title');
  await expect(dropdownTitle).toBeVisible({ timeout: 5000 });
  await dropdownTitle.click();

  // Click "Labels statistic" option in dropdown content
  const labelsStatisticOption = page.getByTestId('ui_dropdown_content').getByText('Labels statistic');
  await expect(labelsStatisticOption).toBeVisible({ timeout: 5000 });
  await labelsStatisticOption.click();

  // Wait for #portal_root to be attached and visible
  const portalRoot = page.locator('#portal_root');
  await portalRoot.waitFor({ state: 'visible', timeout: 10000 });

  // Get the img element inside #portal_root
  const imgElement = portalRoot.getByRole('img');
  await expect(imgElement).toBeVisible({ timeout: 10000 });

  // Scroll into view and click
  await imgElement.scrollIntoViewIfNeeded();
  await imgElement.click();
});
*/