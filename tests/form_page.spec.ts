import {chromium, test as it, expect} from "playwright/test"

it.beforeAll(() => {
    console.log('Before all tests');
})

it.describe.skip('Form page', () => {
    it.beforeEach(() => {
        console.log('Before each test');
    })

    it.afterEach(() => {
        console.log('After each test');
    })

    it.afterAll(() => {
        console.log('After all test');
    })

    it('test1', () => {
        console.log('Test 1');
    })

    it('test2', () => {
        console.log('Test 2');
    })
})

it.describe('FORM PAGE', () => {
    it('Fill all fields', async ({page}) => {
        // const browser = await chromium.launch({ headless: false });
        // const context = await browser.newContext();
        // const page = await context.newPage();

        await page.goto('https://www.lambdatest.com/selenium-playground/input-form-demo')
        await page.pause()
        await page.locator('[id="name"]').fill('Bober')
        await page.locator('[class="w-full border border-gray-90 text-size-14 rounded mt-10 px-10 py-5"][type="email"]')
            .pressSequentially('bober@bober.com', {delay: 500})
        await page.locator('input[placeholder="Password"]').fill('Bober123')
        await page.locator('[for="companyname"] ~  [placeholder="Company"]').fill('BestBober')
        await page.locator('label:has-text("Website") ~ input#websitename').fill('https://www.bober.com')
        await page.selectOption('select[name="country"]', {label: "China"})
        await page.locator('label:has-text("City") ~ input[name="city"]').fill('BoberCity')
        await page.getByPlaceholder("Address 1").fill('Best Bober street')
        await page.getByPlaceholder("Address 2").fill('Happy Frog street')
        await page.getByRole('textbox', {name:"Zip Code"}).fill('72180')
        await page.getByRole('textbox', {name:"State"}).fill('Ontario')
        await page.getByRole('button', {name:"Submit"}).click()
        await expect(page.locator('h2:has-text("Input form validations")')).toBeVisible()
        await page.pause()
    })
})