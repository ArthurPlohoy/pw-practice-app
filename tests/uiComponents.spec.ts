import {expect, test} from '@playwright/test';

test.describe('First test suite', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('http://localhost:4200/');
        await page.getByText('Forms').click();
        await page.getByText('Form Layouts').click();
    });

    // test('input fields', async ({ page }) => {
    //     const emailField = page.locator('nb-card', {hasText: "Using the Grid"}).getByRole('textbox', { name: 'Email' }).first();

    //     await emailField.fill('test@example.com');
    //     await emailField.clear();
    //     await emailField.pressSequentially('test@example2.com', {delay: 500});
    //     const emailValue = await emailField.inputValue();
    //     expect(emailValue).toEqual(emailValue);
    // });

    test('radio buttons', async ({ page }) => {
        const usingForm = page.locator('nb-card', {hasText: "Using the Grid"});

        await usingForm.getByLabel('Option 1').check();
        await usingForm.getByLabel('Option 2').check();
        
    });

});
