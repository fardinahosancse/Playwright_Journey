import {expect, firefox, test} from '@playwright/test'
import { filter } from 'rxjs/operators';


test.describe('08_DatePicker_Part1',()=>{

  test('01_DatePicker_Scensario_01',async({page})=>{
    await page.goto('http://localhost:4200/')
    await page.getByText('Forms').click()
    await page.getByText('Datepicker').click()

  
   /*
      Scenario Explanation:
      When you need to select a date for tomorrow, the next month, or the next year,
      you don't want to manually update the date every time.
      Instead, you want it to be automated. For example, the test should automatically select
      tomorrow's date each time it runs.
   */

    //Saves datePickerLoc Location
    const datePickerLoc = await page.getByPlaceholder('Form Picker')
    //Perform Click on datePickerLoc
    await datePickerLoc.click()

    //Perform Selection on datePickerLoc 
    //Works - await page.locator('nb-overlay-container nb-calendar nb-card nb-card-body nb-calendar-day-cell').getByText('1',{exact:true}).first().click()
    await page.locator('[class="day-cell ng-star-inserted"]').getByText('1',{exact:true}).click()
    
    //Verify Selection
    await expect(datePickerLoc).toHaveValue('Dec 1, 2024')

    
  })
  test('01_DatePicker_Scensario_02',async({page})=>{
    await page.goto('http://localhost:4200/')
    await page.getByText('Forms').click()
    await page.getByText('Datepicker').click()



    // Date Operation
    const date = new Date()
    date.setDate(date.getDate()+266)
    const expectedDate = date.getDate().toString()
    const expectedMOnthShort = date.toLocaleString('En-US',{month:'short'})
    const expectedMOnthFull = date.toLocaleString('En-US',{month:'long'})
    const expectedYear = date.getFullYear().toString()
    const DateAssertion = expectedMOnthShort + ' ' + expectedDate + ', ' + expectedYear

    //BUt this is not dynamic. Why is that ?
    //Becasue If give input dqte like 65, so 65 means three months later. How its gonna selet month like that?



    //Saves datePickerLoc Location
    const datePickerLoc = await page.getByPlaceholder('Form Picker')
    await datePickerLoc.click()

    //But this is not dynamic. Why is that ?
    //Becasue If give input date like 65, so 65 means three months later. How its gonna selet month like that?
    let actualMonthYear = await page.locator('nb-datepicker-container nb-calendar-view-mode').textContent()
    const expectedMonthYear =  expectedMOnthFull + " " + expectedYear

    while(!actualMonthYear.includes(expectedMonthYear)){
      await page.locator('nb-calendar-pageable-navigation [data-name="chevron-right"]').click()
      actualMonthYear = await page.locator('nb-datepicker-container nb-calendar-view-mode').textContent()
   
    }




    //Perform Selection on datePickerLoc 
    //Works - await page.locator('nb-overlay-container nb-calendar nb-card nb-card-body nb-calendar-day-cell').getByText('1',{exact:true}).first().click()
    await page.locator('[class="day-cell ng-star-inserted"]').getByText(expectedDate,{exact:true}).click()
    
    //Verify Selection
    await expect(datePickerLoc).toHaveValue(DateAssertion)

    
  })
  test('01_DatePicker_Scensario_03',async({page})=>{
    await page.goto('https://www.tutorialspoint.com/selenium/practice/date-picker.php')

    
    const date = new Date()
    date.setDate(date.getDate()+1)
    const expectedDate = date.getDate().toString()
    const expectedMonthNumber = (date.getMonth()+190).toString()
    const expectedMonthName = date.toLocaleString('En-US',{month:'long'})
    const expectedYear = date.getFullYear().toString()
    const expectedDateSequence = expectedYear + '-' + expectedMonthNumber+ '-' + expectedDate + ' ' + '12:00'

    await page.locator('#datetimepicker1').click()
    let monthM = await page.locator('.flatpickr-months .flatpickr-current-month .flatpickr-monthDropdown-months').textContent()
    let yearM = await page.locator('.flatpickr-months .flatpickr-current-month .numInputWrapper .numInput cur-year').textContent()

    const expectedMY = expectedMonthName + ' ' + expectedYear
    const actualMY = monthM + ' ' + yearM
    while(!actualMY.includes(expectedMY)){
      await page.locator('.flatpickr-months flatpickr-next-month').click()
      monthM = await page.locator('.flatpickr-months .flatpickr-current-month .flatpickr-monthDropdown-months')
      yearM = await page.locator('.flatpickr-months .flatpickr-current-month .numInputWrapper .numInput cur-year').textContent()
    }


    
    await page.locator('.flatpickr-innerContainer .dayContainer').getByText(expectedDate,{exact:true}).first().click()
    await page.locator('.container' ).getByText('Select Date',{ exact: true }).click()
    await expect(await page.locator('#datetimepicker1')).toHaveValue(expectedDateSequence)






  })
  
  test('SDET_QA_001',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    await page.locator('#datepicker').fill('12/29/2024')
    await expect(await page.locator('#datepicker')).toHaveValue('12/29/2024')
  })

  test('SDET_QA_002',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    await page.locator('#datepicker').click()
    let date = '11'
    let month = 'May'
    let year = '2026'

    let actualMonth = await page.locator('.ui-datepicker-month').textContent()
    let actualYear = await page.locator('.ui-datepicker-year').textContent()


    //trim() - The trim() method is used here to remove any leading or trailing whitespace characters from the text content retrieved by textContent().
    while(actualYear.trim() !== year && actualMonth.trim() !== month){
      await page.locator('[title="Next"]').click()
      actualMonth = await page.locator('.ui-datepicker-month').textContent()
      actualYear = await page.locator('.ui-datepicker-year').textContent()
    }
    console.log(actualMonth.trim(),' ',actualYear.trim());

    await page.locator('#ui-datepicker-div .ui-datepicker-calendar').getByText(date).click()
    await expect.soft(page.locator('#datepicker')).toHaveValue('05/11/2025')
    
  })
})
