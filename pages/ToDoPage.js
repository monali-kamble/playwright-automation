import { expect } from '@playwright/test';

export class TodoPage {
    constructor (page) {
        this.page = page;
        this.input = page.getByRole('textbox', { name: 'What needs to be done?' });
        this.todoItems = page.locator('.todo-list li');
    }
    async goto() {
          await this.page.goto('https://demo.playwright.dev/todomvc/#/'); 
    } 

    async addTask (taskName) {
          await this.input.fill(taskName);
          await this.input.press('Enter');
               }

    async completeTask (taskName) {
          const task = this.todoItems.filter({ hasText: taskName });
          await task.locator('.toggle').check();
    }  
    
    async deleteTask (taskName) {
          const task = this.todoItems.filter({ hasText: taskName });
          await task.hover();
          await task.locator('.destroy').click();
    }


    async verifyTaskVisible (taskName) {
        await expect (this.page.getByText(taskName)).toBeVisible();
    }

    async verifyTaskNotVisible (taskName) {
        await expect (this.page.getByText(taskName)).not.toBeVisible();
    }

    async addTasks(taskList) {
        for (const task of taskList) {
            await this.addTask(task);
        }
    }


        async verifyTasksVisible (taskList) {
          const items = this.todoItems;
          await expect(items).toHaveCount(taskList.length);
          for (const task of taskList) {
               const taskItem = items.filter({ hasText: task });
               await expect(taskItem).toBeVisible();
             }
        }

        async verifyTasksNotVisible (taskList) {
          for (const task of taskList) {
               await expect (this.page.getByText(task)).not.toBeVisible();
             }
        }


        async deleteCompletedTask(taskName) {
            await this.completeTask(taskName);
            await this. deleteTask(taskName);
            await expect(this.page.getByText(taskName)).not.toBeVisible();
        }
 
    }
    