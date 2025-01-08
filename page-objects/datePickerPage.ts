import { expect,Page } from "@playwright/test";

export class DatePickerPage{
    private readonly page:Page

    constructor(page:Page){
        this.page= page
    }


    /**
     * 
     * @param numberOfDayFromToday : Number of Day From Today : Ex( If Input is 7 ,then If Today is Jan 1, then Expecetd Date is 8 ) 
     */
    async selectCommonDatePickerFromToday(numberOfDayFromToday:number){
      const calendarInputField = await this.page.getByPlaceholder('Form Picker')
      await calendarInputField.click()
      const expectedCalendarInputFieldAssert = await this.selectDateInTheCalendar(numberOfDayFromToday)
      await expect.soft(calendarInputField).toHaveValue(expectedCalendarInputFieldAssert)
    }
    /**
     * 
     * @param startingdDay : Start Day: 1
     * @param endingDay : End Day : 365
     */
    async selectDatewitRangeFromToday(startingdDay:number,endingDay:number){
      const calendarInputField = await this.page.getByPlaceholder('Range Picker')
      await calendarInputField.click()
      const dateToAssertStart = await this.selectDateInTheCalendar(startingdDay)
      const dateToAssertEnd = await this.selectDateInTheCalendar(endingDay)
      const dateToAssert = `${dateToAssertStart} - ${dateToAssertEnd}`;
      await expect.soft(calendarInputField).toHaveValue(dateToAssert)
    }


    private async selectDateInTheCalendar(numberOfDayFromToday:number){
    //Get and Set Date 
    //Formart: Jan 18, 2025
    let datePFramwork = new Date();
    datePFramwork.setDate(datePFramwork.getDate()+numberOfDayFromToday)
    const expectedDate = datePFramwork.getDate().toString()
    const expectedMonthShort = datePFramwork.toLocaleString('en-US',{month:'short'})
    const expectedMonthFull = datePFramwork.toLocaleString('en-US',{month:'long'})
    const expectdeYear = datePFramwork.getFullYear()
    const expectedCalendarInputFieldAssert = expectedMonthShort + " " + expectedDate + ","+ " " + expectdeYear 
    const expecetdCalendarSelectionViewDate = " "+expectedMonthFull+" "+expectdeYear+" "

    //V02 -My Approch
    while(true){
      let calendarSelectionViewMonthYear = await this.page.locator('nb-calendar-view-mode').textContent()
      if(calendarSelectionViewMonthYear.includes(expecetdCalendarSelectionViewDate)){
        break;
      }
      await this.page.locator('[data-name="chevron-right"]').click()
    }
    await this.page.locator('.day-cell.ng-star-inserted:not(.bounding-month)').getByText(expectedDate,{exact:true}).click()
    return expectedCalendarInputFieldAssert
    }



}
