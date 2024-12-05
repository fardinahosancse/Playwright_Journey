import {expect, test} from '@playwright/test'
import { filter } from 'rxjs/operators';


test.describe('07_WebTable_Part1',()=>{

  test('01_WebTable_Scenario_01',async({page})=>{
    await page.goto('http://localhost:4200/')
    await page.getByText('Tables & Data').click()
    await page.getByText('Smart Table').click()

    


              
  })
  
})
