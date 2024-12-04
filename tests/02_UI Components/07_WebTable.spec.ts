import {expect, test} from '@playwright/test'
import { filter } from 'rxjs/operators';


test.describe('07_WebTable',()=>{

  test('01_WebTable',async({page})=>{
    await page.goto('http://localhost:4200/')
    await page.getByText('Tables & Data').click()
    await page.getByText('Smart Table').click()



        /*
            1.Find Row of the Table
            2.Click Edit Button
            3.Change AGE 
            4.Click ok Button
            5.Verify UI Update with Updated Age
        */

    //Detect Element - Artemis Bandor

    //1. Find Row of the Table
    const targetRow = await page.getByRole('row',{name:'twitter@outlook.com'})
    //2. Click Edit Button
    await targetRow.locator('.nb-edit').click()

    //3. Change AGE 
    await page.locator('input-editor').getByPlaceholder('Age').clear()
    await page.locator('input-editor').getByPlaceholder('Age').fill('43')

    //4. Click ok Button
    await page.locator('.nb-checkmark').click()

    //5.Verify UI Update with Updated Age
    await expect.soft(page.getByRole('row',{name:'twitter@outlook.com'}).
    getByText('43')).
    toHaveText('43')
    

              
  })
  
})