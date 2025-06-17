import {test as it, expect} from "playwright/test"

it.beforeAll(() => {
    console.log('Before all tests');
})

it.describe('DemoQA', () => {
    it('Fill all fields', async ({page}) => {
        await page.goto('https://demoqa.com/automation-practice-form#google_vignette')
        await page.pause()
        await page.locator('[id="firstName"]').fill('Harry')
        await page.locator('input[placeholder="Last Name"]').fill('Potter')
        await page.locator('[id="userEmail"]').fill('harrypotter@hogwarts.com')
        await page.locator('.custom-control-label', { hasText: 'Other' }).click();
        await page.locator('[id="userNumber"]').fill('0123456789')




        //await page.locator('[id="currentAddress"]').fill('London street 1, London, UK')
        //await page.selectOption('[name="dropdown"]', { label: 'Drop Down Item 4' });
        //city
        //await page.locator('[class="btn btn-primary"]').click()
        //await expect(page.locator('[id="example-modal-sizes-title-lg"]:has-text("Thanks for submitting the form")')).toBeVisible()
    })
})