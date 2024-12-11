import {expect, firefox, test} from '@playwright/test'
import { filter } from 'rxjs/operators';


test.describe('08_DatePicker_Part1',()=>{

  test('01_DatePicker_01',async({page})=>{
    await page.goto('http://localhost:4200/')
    await page.getByText('Forms').click()
    await page.getByText('Datepicker').click()


    //Saves datePickerLoc Location
    const datePickerLoc = await page.getByPlaceholder('Form Picker')
    //Perform Click on datePickerLoc
    await datePickerLoc.click()

    //Perform Selection on datePickerLoc
    await page.locator('nb-overlay-container nb-calendar nb-card nb-card-body ').getByText('31').click()
    //Verify Selection
    
    await expect(datePickerLoc).toHaveValue('Dec 31, 2024')

    
  })

  
})
