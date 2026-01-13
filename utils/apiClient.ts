import { request } from '@playwright/test';

export async function createUser() {
  const context = await request.newContext();
  const response = await context.post('/api/users', {
    data: { name: 'Test User' }
  });

  return response.json();
}
