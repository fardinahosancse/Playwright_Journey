import {expect, test} from '@playwright/test'
import { filter } from 'rxjs/operators';


test.describe('07_WebTable',()=>{

  test('01_WebTable_Scenario_01',async({page})=>{
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
    await expect(targetRow).toBeVisible()
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

  test('02_WebTable_Scenario_02',async({page})=>{
    await page.goto('http://localhost:4200/')
    await page.getByText('Tables & Data').click()
    await page.getByText('Smart Table').click()


    // 01 - Navigate to  Second Page
    const buttonPOS = await page.locator('.ng2-smart-pagination-nav').getByText('2')
    await expect(buttonPOS).toBeVisible() // Assertions of being sure that element is visible
    await buttonPOS.click()
    

    // 02 - Select Row that has id : 11
    const rowId = await page.getByRole('row',{name:'11'}).filter({has:page.locator('td').nth(1).getByText('11')})

    //2. Click Edit Button
    await rowId.locator('.nb-edit').click()
    //3. Change AGE 
      await page.locator('input-editor').getByPlaceholder('Age').clear()
      await page.locator('input-editor').getByPlaceholder('Age').fill('43')
  
    //4. Click ok Button
      await page.locator('.nb-checkmark').click()
    //Assertion that changes are made
      await expect.
        soft(page.getByRole('row',{name:'@mark'}).
        getByText('43')).
        toHaveText('43')
  
              
  })
  
})