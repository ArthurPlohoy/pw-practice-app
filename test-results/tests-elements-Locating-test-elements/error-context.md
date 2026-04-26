# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests/elements.spec.ts >> Locating test elements
- Location: tests/elements.spec.ts:12:9

# Error details

```
Error: locator.click: Test ended.
Call log:
  - waiting for locator('nb-card nb-radio :text-is("Option 1")')

```

# Test source

```ts
  1  | import {test} from '@playwright/test';
  2  | 
  3  | test.describe('First test suite', () => {
  4  |     test.beforeEach(async ({ page }) => {
  5  |         await page.goto('http://localhost:4200/');
  6  |         await page.getByText('Forms').click();
  7  |         await page.getByText('Form Layouts').click();
  8  |     });
  9  | 
  10 | });
  11 | 
  12 |     test('Locating test elements', async ({ page }) => {
> 13 |         await page.locator('nb-card nb-radio :text-is("Option 1")').click();
     |                                                                     ^ Error: locator.click: Test ended.
  14 | });
  15 | 
```