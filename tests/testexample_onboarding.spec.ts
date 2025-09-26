/* import { test, expect } from '@playwright/test';

test('onboarding', async ({ page }) => {
  await page.goto('https://platform.labelyourdata.com/sign-in');
  
  // Check if sign-in inputs are visible
  const usernameInput = page.getByTestId('sign-in-username');
  const passwordInput = page.getByTestId('sign-in-password');
  const signInButton = page.getByTestId('sign-in-btn');

  await expect(usernameInput).toBeVisible();
  await expect(passwordInput).toBeVisible();

  // Fill in credentials
  await usernameInput.fill('client_test1');
  await passwordInput.fill('Fjik67%ips');

  // Click sign-in and wait for navigation
  await Promise.all([
    page.waitForNavigation(),
    signInButton.click(),
  ]);

  // Wait for onboarding hint and click "Got it"
  const onboardingHint = page.getByTestId('onboarding_hint_got_it');
  await expect(onboardingHint).toBeVisible();
  await onboardingHint.click();

  // Verify and click "Machine Learning" button
  const mlButton = page.getByText('🧑‍💻 Machine Learning');
  await expect(mlButton).toBeVisible();
  await mlButton.click();

  // Verify and click "Confirm" button
  const confirmButton = page.getByRole('button', { name: 'Confirm' });
  await expect(confirmButton).toBeVisible();
  await confirmButton.click();
});
*/