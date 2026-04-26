import {test} from '@playwright/test';

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

});

  
