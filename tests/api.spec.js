import { test, expect } from '@playwright/test';
import { request } from 'node:http';
import { it } from 'node:test';

test('Get API Test', async ({ request }) => {
  const response = await request.get('https://jsonplaceholder.typicode.com/comments');

  expect(response.status()).toBe(200);

  const body = await response.json();
   
  for (const item of body) {
       expect(item.id).toBeDefined();
       expect(typeof item.id).toBe('number');
       expect(item.email).toBeDefined();
       expect(item.email).toContain('@');
  }
  

});

test('POST API Test', async ({ request }) => {
    const response = await request.post(   
        'https://jsonplaceholder.typicode.com/posts',

        {
        data: {
            title : 'Learn Playwright',
            body : 'API Testing',
            userId : 1  

        }
    });

expect(response.status()).toBe(201);

            const body = await response.json();
                  expect(body.title).toBe('Learn Playwright');
                  expect(body.body).toBe('API Testing');
                  expect(body.userId).toBe(1);

});