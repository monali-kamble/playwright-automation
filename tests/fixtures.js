import { test as base } from '@playwright/test';
import { TodoPage } from '../pages/ToDoPage';

export const test = base.extend({
  todoPage: async ({ page }, use) => {
    const todoPage = new TodoPage(page);
    await todoPage.goto();
    await use(todoPage);
  }
});