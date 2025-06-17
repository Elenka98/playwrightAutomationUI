import {test as it, expect} from '@playwright/test';
import {DatePicker} from "../page_object/DatePicker";
import {DatePickerHW} from "../page_object/DatePickerHW";



it.describe('DATE PICKER', () => {
    it.skip('Navigate to Date Picker page', async ({page}) => {
        const datePicker = new DatePicker(page)
        await datePicker.navigateToDatePicker()
        await datePicker.verifyHeader()
        await datePicker.dateFromToday()
        console.log(page.url())
        await expect(page).toHaveURL(/jquery-date-picker-demo/);
    })

    it('Homework Date Picker "TO"', async ({page}) => {
        const datePickerHW = new DatePickerHW(page)
        await datePickerHW.navigateToDatePicker()
        await datePickerHW.verifyHeader()
        await datePickerHW.dateFromTomorrow()
        console.log(page.url())
        await expect(page).toHaveURL(/jquery-date-picker-demo/);
    })
})