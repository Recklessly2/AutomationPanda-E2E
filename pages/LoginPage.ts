import { Page } from '@playwright/test';

export class LoginPage {
  constructor(private page: Page) {}

  async login(user: string, pass: string) {
    await this.page.fill('#username', user);
    await this.page.fill('#password', pass);
    await this.page.click('button[type="submit"]');
  }
}
