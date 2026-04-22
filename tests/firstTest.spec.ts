import {test} from '@playwright/test';

test.describe('First test suite', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('http://localhost:4200/');
        await page.getByText('Forms').click();
    });

    test('my first test', async ({ page }) => {
        await page.getByText('Form Layouts').click();
        await page.getByText('Basic Form').click();
    });

});