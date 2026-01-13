import { test, expect } from '@playwright/test';
import { createUser } from '@utils/apiClient';



test('user appears in UI', async ({ page }) => {
  const user = await createUser();
  await page.goto('/users');
  await page.locator(`text=${user.name}`).isVisible();
  await page.pause();
});
