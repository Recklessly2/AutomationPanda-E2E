import { test } from '@playwright/test';
import { DashboardPage } from '../pages/DashboardPage';

test('dashboard loads', async ({ page }) => {
  const dashboard = new DashboardPage(page);
  await page.goto('/dashboard');
  await dashboard.verifyLoaded();
});
