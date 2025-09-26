/* import { test, expect } from '@playwright/test';

test('resend_email', async ({ page }) => {
  await page.goto('https://platform.labelyourdata.com/confirm-email');

  const resendLink = page.getByRole('link', { name: 'Resend email' });
  await expect(resendLink).toBeVisible();
  await resendLink.click();

  const emailInput = page.getByTestId('sign-up-email');
  await expect(emailInput).toBeVisible();
  await emailInput.fill('hurfinkelannaqa@gmail.com');

  const resendButton = page.getByRole('button', { name: 'Resend email' });
  await expect(resendButton).toBeVisible();
  await expect(resendButton).toBeEnabled();
  await resendButton.click();

  const confirmationText = page.getByText(/we['’]?ve sent you an email to your email/i);
  await expect(confirmationText).toBeVisible({ timeout: 10000 });
});
*/