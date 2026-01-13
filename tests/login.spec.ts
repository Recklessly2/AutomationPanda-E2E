import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://automationpanda.com/');
  await expect(page).toHaveTitle("Automation Panda | A blog for software development and testing");
  await page.pause();
});