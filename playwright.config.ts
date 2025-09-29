import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  /* Запуск тестів паралельно */
  fullyParallel: true,

  /* Заборонити test.only на CI */
  forbidOnly: !!process.env.CI,

  /* Кількість повторів на CI */
  retries: process.env.CI ? 2 : 0,

  /* Кількість воркерів на CI */
  workers: process.env.CI ? 1 : undefined,

  /* Конфігурація репортера — html звіт у playwright-report */
  reporter: [['html', { outputFolder: 'playwright-report', open: 'never' }]],

  use: {
    /* Збирати трасування при першому падінні */
    trace: 'on-first-retry',
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});
