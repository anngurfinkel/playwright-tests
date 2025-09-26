import { test, expect } from '@playwright/test';

test('Email confirmation message appears after sign-up', async ({ page }) => {
  // Перехід на сторінку реєстрації
  await page.goto('https://platform.labelyourdata.com/sign-up');

  // Заповнення форми реєстрації
  await page.getByTestId('sign-up-email').fill('hurfinkelannaqa@gmail.com');
  await page.getByTestId('sign-up-username').fill('client_user_1');
  await page.getByTestId('sign-up-password').fill('Fjik67%ips');
  await page.getByTestId('sign-up-confirm_password').fill('Fjik67%ips');

  // Очікування, поки кнопка стане активною
  const signUpButton = page.getByRole('button', { name: 'Sign up', exact: true });
  await expect(signUpButton).toBeEnabled();

  // Натискання кнопки "Sign up"
  await signUpButton.click();

  // Очікування появи повідомлення про підтвердження
  const confirmationMessage = page.getByText('Confirm your email');
  await expect(confirmationMessage).toBeVisible({ timeout: 10000 });
});
