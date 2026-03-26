import { expect } from '@playwright/test';
import { TodoPage } from '../pages/ToDoPage';
import { tasks } from '../test-data/tasks';
import { test } from './fixtures';


test.describe('Todo App', () => {

  test.describe.configure({ mode: 'serial '});



test('User can add a Task', async ({ todoPage }) => {
        await todoPage.addTask('buy groceries');
        await todoPage.verifyTaskVisible(['buy groceries']);
});

test('User can add multiple Tasks @smoke', async ({ todoPage }) => {
  await todoPage.addTasks(tasks);
  await todoPage.verifyTasksVisible(tasks);
});


test('User can complete and delete the task from the list', async ({ todoPage }) => {
  await todoPage.addTasks(tasks);
  
  await todoPage.deleteCompletedTask(tasks[0]);

});

test ('API + UI Validation  @smoke @apiui', async ({ todoPage }) => {
  const taskName = 'Learn Playwright' ;
  await todoPage.addTask(taskName);
  await todoPage.verifyTaskVisible(taskName);
});
});