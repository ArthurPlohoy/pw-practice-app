import {expect, test} from '@playwright/test';

test.describe('First test suite', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('http://localhost:4200/');
        await page.getByText('Forms').click();
        await page.getByText('Form Layouts').click();
    });

    test('Locating test elements', async ({ page }) => {
        await page.locator('nb-card nb-radio :text-is("Option 1")').click();
        await page.locator('nb-card').getByRole('button', { name: 'Sign in' }).first().click();
    });
    test('Locating parent elements', async ({ page }) => {
        await page.locator('nb-card', { hasText: "Using the Grid" }).getByRole('textbox', { name: 'Email' }).first().click();
    });

    // Extracting Values
    test('Extracting values', async ({ page }) => {
        // single test value. 
        const basicForm = page.locator('nb-card').filter({hasText: "Basic form"}); 
        const buttonText = await basicForm.locator('button').textContent()
        expect(buttonText).toEqual('Submit');

        // all text value
         const allRadioButtonsLabels = await page.locator('nb-radio').allTextContents()
         expect(allRadioButtonsLabels).toEqual(['Option 1', 'Option 2', 'Disabled Option']);
         expect(allRadioButtonsLabels).toContain('Option 1');

        // input value
        const emailField = basicForm.getByRole('textbox', { name: 'Email' }).first();
        await emailField.fill('test@example.com');
        const emailValue = await emailField.inputValue();
        expect(emailValue).toEqual(emailValue);

    });

});

  
