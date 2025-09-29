import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  /* Паралельне виконання */
  fullyParallel: true,

  /* Заборонити test.only на CI */
  forbidOnly: !!process.env.CI,

  /* Ретрай тести на CI */
  retries: process.env.CI ? 2 : 0,

  /* Один воркер на CI */
  workers: process.env.CI ? 1 : undefined,

  /* HTML репортер */
  reporter: [['html', { open: 'never' }]],

  use: {
    /* Збирати trace при першому фейлі */
    trace: 'on-first-retry',
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});
