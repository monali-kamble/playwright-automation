import { test, expect } from '@playwright/test';

test('Form submitted successfully with valid user details', async ({ page }) => {
  await page.goto('https://demoqa.com/automation-practice-form');
  await page.getByRole('textbox', { name: 'First Name' }).click();
  await page.getByRole('textbox', { name: 'First Name' }).fill('John');
  await page.getByRole('textbox', { name: 'Last Name' }).click();
  await page.getByRole('textbox', { name: 'Last Name' }).fill('Doe');
  await page.getByRole('textbox', { name: 'name@example.com' }).click();
  await page.getByRole('textbox', { name: 'name@example.com' }).fill('john@test.com');
  await page.getByRole('radio', { name: 'Male', exact: true }).check();
  await page.getByRole('textbox', { name: 'Mobile Number' }).click();
  await page.getByRole('textbox', { name: 'Mobile Number' }).fill('9876543210');
  await expect(page.locator('#submit')).toContainText('Submit');
  await page.getByRole('button', { name: 'Submit' }).click();
  await expect (page.getByText('Thanks for submitting the form')).toBeVisible();
});




test('Form should not submit with Empty data', async ({ page }) => {
  await page.goto('https://demoqa.com/automation-practice-form');
  await page.getByRole('button', { name: 'Submit' }).click();
  await expect (page.getByText('Thanks for submitting the form')).not.toBeVisible();
});



test('Form should not submit with Invalid Email', async ({ page }) => {
  await page.goto('https://demoqa.com/automation-practice-form');
  await page.getByRole('textbox', { name: 'First Name' }).click();
  await page.getByRole('textbox', { name: 'First Name' }).fill('John');
  await page.getByRole('textbox', { name: 'Last Name' }).click();
  await page.getByRole('textbox', { name: 'Last Name' }).fill('Doe');
  await page.getByRole('textbox', { name: 'Mobile Number' }).click();
  await page.getByRole('textbox', { name: 'Mobile Number' }).fill('9876543210');
  await page.getByRole('textbox', { name: 'name@example.com' }).click();
  await page.getByRole('textbox', { name: 'name@example.com' }).fill('abc.com');
  await page.getByRole('radio', { name: 'Male', exact: true }).check();
  await page.getByRole('button', { name: 'Submit' }).click();
  await expect (page.getByText('Thanks for submitting the form')).not.toBeVisible();
});




test('Form should not submit with Invalid Mobile Number', async ({ page }) => {
  await page.goto('https://demoqa.com/automation-practice-form');
  await page.getByRole('textbox', { name: 'First Name' }).fill('John');
  await page.getByRole('textbox', { name: 'Last Name' }).fill('Doe');
  await page.getByRole('textbox', { name: 'name@example.com' }).fill('john@test.com');
  await page.getByRole('radio', { name: 'Male', exact: true }).check();
  await page.getByRole('textbox', { name: 'Mobile Number' }).fill('987654321');
  await page.getByRole('button', { name: 'Submit' }).click();
  await expect (page.getByText('Thanks for submitting the form')).not.toBeVisible();
});