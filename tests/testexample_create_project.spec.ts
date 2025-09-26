import { test, expect } from '@playwright/test';

test('create_project', async ({ page }) => {
  await page.goto('https://platform.labelyourdata.com/sign-in');

  // Sign in
  await page.getByTestId('sign-in-username').fill('client_test1');
  await page.getByTestId('sign-in-password').fill('Fjik67%ips');
  await page.getByTestId('sign-in-btn').click();

  // Wait for dashboard to load and click "New Project"
  await expect(page.getByRole('button', { name: 'New Project' })).toBeVisible({ timeout: 10000 });
  await page.getByRole('button', { name: 'New Project' }).click();

  // Project settings
  await page.getByTestId('project_settings_name').fill('Project_test1');
  await page.getByTestId('project_settings_summary').fill('Project');

  // Select task type
  await page.locator('.css-19bb58m').first().click();
  await page.getByRole('option', { name: 'Object detection' }).click();

  // Select annotation method
  await page.locator('div').filter({ hasText: /^Select annotation method$/ }).nth(2).click();
  await page.getByRole('option', { name: 'Rectangle' }).click();

  // Label setup
  await page.getByTestId('label_name').fill('test');
  await page.getByTestId('save_label_btn').click();
  await page.getByTestId('next_step').click();
  await page.getByTestId('save').click();

  // Launch project
  await expect(page.getByTestId('launch_project')).toBeVisible({ timeout: 10000 });
  await page.getByTestId('launch_project').click();

  // Verify redirected to project page
  await expect(page).toHaveURL(/\/project\/\d+\/\d+/);
});
