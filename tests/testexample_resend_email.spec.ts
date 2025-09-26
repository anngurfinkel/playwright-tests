import { test, expect } from '@playwright/test';

test('resend_email', async ({ page }) => {
  await page.goto('https://platform.labelyourdata.com/confirm-email');

  // Wait for and click "Resend email" link
  const resendLink = page.getByRole('link', { name: 'Resend email' });
  await expect(resendLink).toBeVisible();
  await resendLink.click();

  // Fill email input
  const emailInput = page.getByTestId('sign-up-email');
  await expect(emailInput).toBeVisible();
  await emailInput.fill('hurfinkelannaqa@gmail.com');

  // Click "Resend email" button
  const resendButton = page.getByRole('button', { name: 'Resend email' });
  await expect(resendButton).toBeVisible(); // Optional but useful
  await expect(resendButton).toBeEnabled();
  await resendButton.click();

  // Confirm success message appears
  const confirmationText = page.getByText(/we've sent you an email to your email/i);
  await expect(confirmationText).toBeVisible({ timeout: 10000 });
});
