import { test, expect } from '@playwright/test';

test('create_project', async ({ page }) => {
  await page.goto('https://platform.labelyourdata.com/sign-in');

  // Sign in
  await page.getByTestId('sign-in-username').fill('client_test1');
  await page.getByTestId('sign-in-password').fill('Fjik67%ips');

  await Promise.all([
    page.waitForNavigation({ waitUntil: 'networkidle' }),
    page.getByTestId('sign-in-btn').click(),
  ]);

  // Wait for "New Project" button and click it
  const newProjectBtn = page.getByRole('button', { name: 'New Project' });
  await expect(newProjectBtn).toBeVisible({ timeout: 10000 });
  await newProjectBtn.click();

  // Fill project name and summary
  await page.getByTestId('project_settings_name').fill('Project_test1');
  await page.getByTestId('project_settings_summary').fill('Project');

  // Select task type dropdown - обираємо більш стабільний локатор для дропдауна
  const taskTypeDropdown = page.getByLabel('Task type') // або знайди лейбл для цього dropdown
    || page.locator('label', { hasText: 'Task type' }).locator('..').locator('div[role="combobox"]');
  await taskTypeDropdown.click();

  // Wait for options to appear, then select 'Object detection'
  await page.getByRole('option', { name: 'Object detection' }).click();

  // Select annotation method dropdown
  // Теж намагаємось використати більш стабільний селектор
  const annotationMethodDropdown = page.getByLabel('Annotation method')
    || page.locator('label', { hasText: 'Annotation method' }).locator('..').locator('div[role="combobox"]');
  await annotationMethodDropdown.click();

  await page.getByRole('option', { name: 'Rectangle' }).click();

  // Label setup
  await page.getByTestId('label_name').fill('test');
  await page.getByTestId('save_label_btn').click();

  // Wait for the next button to be enabled and click
  const nextStepBtn = page.getByTestId('next_step');
  await expect(nextStepBtn).toBeEnabled();
  await nextStepBtn.click();

  // Save project setup
  const saveBtn = page.getByTestId('save');
  await expect(saveBtn).toBeEnabled();
  await saveBtn.click();

  // Wait for launch project button and click it
  const launchProjectBtn = page.getByTestId('launch_project');
  await expect(launchProjectBtn).toBeVisible({ timeout: 10000 });
  await launchProjectBtn.click();

  // Verify redirected to project page with URL like /project/number/number
  await expect(page).toHaveURL(/\/project\/\d+\/\d+/);
});
