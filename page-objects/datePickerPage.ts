import { expect,Page } from "@playwright/test";

export class DatePickerPage{
    private readonly page:Page

    constructor(page:Page){
        this.page= page
    }


    async selectCommonDatePickerFromToday(numberOfDayFromToday:number){

    const calendarInputField = await this.page.getByPlaceholder('Form Picker')
    await calendarInputField.click()


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

    //V02 -My Approch
    while(true){
      let calendarSelectionViewMonthYear = await this.page.locator('nb-calendar nb-calendar-view-mode').textContent()
      if(calendarSelectionViewMonthYear.includes(expecetdCalendarSelectionViewDate)){
        break;
      }
      await this.page.locator('[data-name="chevron-right"]').click()
    }
    const currentMonthDates = await this.page.locator('[class="day-cell ng-star-inserted"]')
    await currentMonthDates.getByText(expectedDate,{exact:true}).click()
    await expect.soft(calendarInputField).toHaveValue(expectedCalendarInputFieldAssert)
    

    }

}
