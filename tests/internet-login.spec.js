import { test, expect } from '@playwright/test';

test('user can login successfully', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/login');
  await page.getByRole('textbox', { name: 'Username' }).fill('tomsmith');
  await page.getByRole('textbox', { name: 'Password' }).fill('SuperSecretPassword!');
  await page.getByRole('button', { name: ' Login' }).click();
  await expect(page.locator('#flash')).toContainText('You logged into a secure area!');
  await page.getByRole('link', { name: 'Logout' }).click();
});


test('login fails with invalid password', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/login');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('tomsmith');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('wrongpassword');
  await page.getByRole('button', { name: ' Login' }).click();
  await expect(page.locator('#flash')).toContainText('Your password is invalid!');
});


test('Invalid Login', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/login');
  await page.getByRole('button', { name: ' Login' }).click();
  await expect(page.locator('i')).toContainText('Login');
  await page.getByText('Your username is invalid!');
});