import {test as setup, expect} from '@playwright/test';

// #Test1234, Beaver

const authFile: string = './.auth/user.json'

setup('authentication', async ({page}) => {
    // Navigate to the login page
    await page.goto('https://demoqa.com/login')
    await page.getByPlaceholder('UserName').fill('Beaver')
    await page.getByRole('textbox', { name: 'Password'}).fill('#Test1234')
    await page.locator('#login').click()

    // Verify that the user is logged in
    await page.waitForURL('https://demoqa.com/profile')

    await expect(page.locator('[id="userName-value"]')).toHaveText('Beaver')

    // Save all steps to storageState
    await page.context().storageState({path: authFile})
})