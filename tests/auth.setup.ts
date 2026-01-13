import { test } from '@playwright/test';

test('authenticate', async ({ page }) => {
  await page.goto(process.env.BASE_URL!);
  await page.fill('#username', process.env.USERNAME!);
  await page.fill('#password', process.env.PASSWORD!);
  await page.click('button[type="submit"]');

  await page.context().storageState({ path: 'auth.json' });
});
