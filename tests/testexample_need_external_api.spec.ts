/*import { test, expect } from '@playwright/test';

test('need_external_api', async ({ page }) => {
  await page.goto('https://platform.labelyourdata.com/sign-in');

  // Заповнюємо форму входу
  const usernameInput = page.getByTestId('sign-in-username');
  const passwordInput = page.getByTestId('sign-in-password');
  const signInButton = page.getByTestId('sign-in-btn');

  await expect(usernameInput).toBeVisible({ timeout: 5000 });
  await expect(passwordInput).toBeVisible({ timeout: 5000 });

  await usernameInput.fill('client_test1');
  await passwordInput.fill('Fjik67%ips');

  // Клікаємо "Sign in" і чекаємо навігації
  await Promise.all([
    page.waitForNavigation({ waitUntil: 'networkidle' }),
    signInButton.click(),
  ]);

  // Перевіряємо, чи зʼявився card_title — не кидаємо помилку одразу, а даємо змогу зрозуміло впасти
  const cardTitle = page.getByTestId('card_title');

  const cardTitleCount = await cardTitle.count();
  if (cardTitleCount === 0) {
    throw new Error('🛑 card_title not found — можливо, API не повернуло дані');
  }

  await expect(cardTitle).toBeVisible({ timeout: 10000 });
  await cardTitle.click();

  // Відкриваємо дропдаун (клік по контейнеру, не по SVG)
  const dropdownTitle = page.getByTestId('ui_dropdown_title');
  await expect(dropdownTitle).toBeVisible({ timeout: 5000 });
  await dropdownTitle.click();

  // Вибираємо опцію "Need external API?"
  const needExternalAPI = page.getByText('Need external API?');
  await expect(needExternalAPI).toBeVisible({ timeout: 5000 });
  await needExternalAPI.click();

  // Заповнюємо текстове поле з повідомленням
  const messageBox = page.getByRole('textbox', { name: 'e.g. I’m looking to set up' });
  await expect(messageBox).toBeVisible({ timeout: 5000 });
  await messageBox.fill('need external app 123');

  // Підтверджуємо форму
  const confirmButton = page.getByTestId('contact_us_confirm');
  await expect(confirmButton).toBeVisible({ timeout: 5000 });
  await confirmButton.click();

  // Чекаємо появи модалки
  const portalRoot = page.locator('#portal_root');
  await portalRoot.waitFor({ state: 'attached', timeout: 10000 });

  // Закриваємо модалку - намагаємось клікнути по видимому елементу, який її закриває
  const closeDiv = portalRoot.locator('div').nth(2);
  if (await closeDiv.isVisible()) {
    await closeDiv.click();
    return; // якщо клікнули і закрили, завершуємо
  }

  const closeImg = portalRoot.locator('span').getByRole('img');
  if (await closeImg.isVisible()) {
    await closeImg.click();
  }
});
*/