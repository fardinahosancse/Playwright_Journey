import {expect, firefox, test} from '@playwright/test'
import { filter } from 'rxjs/operators';


test.describe('07_WebTable_Part1',()=>{

  test('01_WebTable_Scenario_01',async({page})=>{
    await page.goto('http://localhost:4200/')
    await page.getByText('Tables & Data').click()
    await page.getByText('Smart Table').click()

    const saveRow = await page.getByRole('row',{name:'Larry'})
    await saveRow.locator('.nb-edit').click()

    const emailCell = await page.locator('input-editor').getByPlaceholder('E-mail')
    await emailCell.clear()
    await emailCell.fill('fardinahosan@gmail.com')
    await page.waitForTimeout(500)
    await page.locator('.nb-checkmark').click()
    await expect(await saveRow.locator('td').nth(5)).toHaveText('fardinahosan@gmail.com')
          
  })


  test('02_WebTable_letcodein',async({page})=>{
    await page.goto('https://letcode.in/table')

    //Way : 01 : Fardin
    const loc = await page.locator('#simpletable').locator('tbody tr')
    //await loc.nth(0).locator('td').getByRole('checkbox').check()

    //console.log(await page.locator('#simpletable').locator('tbody tr').count())
    //console.log(await page.locator('#simpletable').locator('tbody tr').first().locator('td').count())
    //Way : 02 : letcode
    


    for (let index = 0; index < await loc.count(); index++) {
      await loc.nth(index).locator('td').getByRole('checkbox').check()
      await expect(loc.nth(index).locator('td').getByRole('checkbox').isChecked()).toBeTruthy()
      
    }

  
          
  })

  test('03_Pagination Web Table',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')

    
    const loc = await page.locator('#productTable').locator('tbody tr')
    
    for (let index = 0; index < await loc.count(); index++) {
      await loc.nth(index).locator('td').getByRole('checkbox').check()
      await expect(loc.nth(index).locator('td').getByRole('checkbox').isChecked()).toBeTruthy()
    }

  
          
  })
  
})
