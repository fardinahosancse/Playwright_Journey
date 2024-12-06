import {expect, firefox, test} from '@playwright/test'
import { filter } from 'rxjs/operators';


test.describe('08_DatePicker_Part1',()=>{

  test('01_DatePicker_01',async({page})=>{
    await page.goto('http://localhost:4200/')
    await page.getByText('Forms').click()
    await page.getByText('Datepicker').click()

    
  })

  
})
