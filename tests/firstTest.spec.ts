import {test} from '@playwright/test';

test.describe('First test suite', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('http://localhost:4200/');
        await page.getByText('Forms').click();
        await page.getByText('Form Layouts').click();
    });

    // test('my first test', async ({ page }) => {
    //     await page.getByText('Form Layouts').click();
    //     await page.getByText('Basic Form').click();
    // });

    test('User facing locators', async ({ page }) => {
       await page.getByRole('textbox', { name: 'Email' }).first().click();

       await page.getByRole('button', { name: 'Sign in' }).first().click();

       await page.getByLabel('Email').first().click();

       await page.getByPlaceholder('Jane Doe').first().click();

       await page.getByText('Using the Grid').first().click();

       await page.getByTestId('submit-button').first().click();

    });

    // test('Local syntax rules', async ({ page }) => {
    //     // by tag name 
    //     page.locator('input')

    //     // by class name
    //     page.locator('.shape-rectangle')

    //     // by id
    //     page.locator('#inputEmail1')

    //     // by attribute
    //     page.locator('[placeholder="Email"]')

    //     // combine different selectors
    //     page.locator('input.shape-rectangle#inputEmail1[placeholder="Email"]')

    //     // by xpath (Not recommended)
    //     page.locator('//input[@id="inputEmail1"]')

    //     // by text content
    //     page.locator('text=Email')
    // });

    

});