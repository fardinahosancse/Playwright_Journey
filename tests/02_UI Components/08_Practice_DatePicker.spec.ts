import {expect, firefox, test} from '@playwright/test'
import { filter } from 'rxjs/operators';


test.describe('08_Practice_DatePicker_Part1',()=>{

  test('01_DatePicker_Scensario_01',async({page})=>{
    await page.goto('http://localhost:4200/')
    await page.getByText('Forms').click()
    await page.getByText('Datepicker').click()  
    await page.getByPlaceholder('Form Picker').click()
    await page.getByPlaceholder('Form Picker').fill('Jan 18, 2025')
    await expect.soft(await page.getByPlaceholder('Form Picker')).toHaveValue('Jan 18, 2025')
  })

  test('01_DatePicker_Scensario_02',async({page})=>{
    await page.goto('http://localhost:4200/')
    await page.getByText('Forms').click()
    await page.getByText('Datepicker').click() 

    const calendarInputField = await page.getByPlaceholder('Form Picker')
    await calendarInputField.click()


    const currentMonthDates = await page.locator('[class="day-cell ng-star-inserted"]')
    await currentMonthDates.getByText('14',{exact:true}).click()
   
  })
  test('01_DatePicker_Scensario_03',async({page})=>{ 
    await page.goto('http://localhost:4200/')
    await page.getByText('Forms').click()
    await page.getByText('Datepicker').click() 

    const calendarInputField = await page.getByPlaceholder('Form Picker')
    await calendarInputField.click()

    //Get and Set Date 
    // Format : 4/11/2025
    // const datePFramwork = new Date();
    // datePFramwork.setDate(datePFramwork.getDate()+100)
    // const expectedDate = datePFramwork.getDate().toString()
    // const expectedMonth = (datePFramwork.getMonth()+1).toString()
    // const expectdeYear = datePFramwork.getFullYear().toString()
    // const expectedFullDate = expectedMonth + "/" + expectedDate + "/"+ expectdeYear 
    // console.log(expectedFullDate)



    //Get and Set Date 
    //Formart: Jan 18, 2025
    const datePFramwork = new Date();
    datePFramwork.setDate(datePFramwork.getDate()+450)
    const expectedDate = datePFramwork.getDate().toString()
    const expectedMonthShort = datePFramwork.toLocaleString('en-US',{month:'short'})
    const expectedMonthFull = datePFramwork.toLocaleString('en-US',{month:'long'})
    const expectdeYear = datePFramwork.getFullYear()
    const expectedCalendarInputFieldAssert = expectedMonthShort + " " + expectedDate + ","+ " " + expectdeYear 
    const expecetdCalendarSelectionViewDate = " "+expectedMonthFull+" "+expectdeYear+" "

    //V01 -Artemis Approch
    // while(!calendarSelectionViewMonthYear.includes(expecetdCalendarSelectionViewDate)){
    //   await page.locator('[data-name="chevron-right"]').click()
    //   calendarSelectionViewMonthYear = await page.locator('nb-calendar nb-calendar-view-mode').textContent()
    // }

    //V02 -My Approch
    while(true){
      let calendarSelectionViewMonthYear = await page.locator('nb-calendar nb-calendar-view-mode').textContent()
      if(calendarSelectionViewMonthYear.includes(expecetdCalendarSelectionViewDate)){
        break;
      }
      await page.locator('[data-name="chevron-right"]').click()
    }
   
    const currentMonthDates = await page.locator('[class="day-cell ng-star-inserted"]')
    await currentMonthDates.getByText(expectedDate,{exact:true}).click()

    await expect.soft(calendarInputField).toHaveValue(expectedCalendarInputFieldAssert)
    
   
  })


})
