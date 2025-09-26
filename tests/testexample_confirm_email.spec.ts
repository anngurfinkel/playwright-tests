import { test, expect } from '@playwright/test';

test('confirm_email', async ({ page }) => {
  await page.goto('https://accounts.google.com/v3/signin/identifier?continue=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F1%2F&emr=1&followup=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F1%2F&ifkv=AXH0vVvjsoeeuuNULc6W_Bl98qj2Ba7Efy2tf9ZUg9wbZfmKOqY_6RoAmkbS-4hjuqs2Vja7LxMj&osid=1&passive=1209600&service=mail&flowName=GlifWebSignIn&flowEntry=ServiceLogin&dsh=S974245078%3A1744284977240692#inbox');
  await page.getByRole('textbox', { name: 'Email or phone' }).click();
  await page.getByRole('textbox', { name: 'Email or phone' }).fill('hurfinkelannqa@gmail.com');
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('textbox', { name: 'Enter your password' }).fill('Fl693uh@');
  await page.getByRole('button', { name: 'Next' }).click();
  await page.goto('https://mail.google.com/mail/u/0/#inbox');
  await page.getByRole('link', { name: 'Confirmation email  -  Confirm your email Your account has been set up. Please' }).click();
  await page.getByRole('button', { name: 'Show trimmed content' }).click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('button', { name: 'Confirm' }).click();
  const page1 = await page1Promise;
});