import {test as it, expect} from "playwright/test"

it.beforeAll(() => {
    console.log('Before all tests');
})

it.describe('HTML Form', () => {
    it('Fill all fields', async ({page}) => {
        await page.goto('https://testpages.eviltester.com/styled/basic-html-form-test.html')
        await page.pause()
        await page.locator('[name="username"]').fill('StrongBober')
        await page.locator('[name="password"]').fill('bober123')
        await page.locator('[cols="40"]').clear()
        await page.locator('[cols="40"]').fill('Area of Mountains')
        await page.locator('[name="filename"]').setInputFiles("C:\\Users\\harma\\OneDrive\\Pictures\\Screenshots\\Screenshot 2025-03-27 210841.png")
        await page.locator('[value="cb2"]').click()
        await page.locator('[value="cb3"]').click()
        await page.locator('[value="rd1"]').click()
        // multiple select values
        await page.selectOption('[name="dropdown"]', { label: 'Drop Down Item 4' });
        await page.locator('[value="submit"]').click()
        await expect(page.getByRole('heading', { name: 'Processed Form Details' })).toBeVisible();
        await page.pause()
    })
})