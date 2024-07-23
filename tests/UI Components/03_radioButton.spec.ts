import { expect,test } from '@playwright/test';

test.beforeEach(async({page})=>{
    await page.goto("http://localhost:4200/")
    await page.getByText("Forms").click()
    await page.getByText("Form Layouts").click()
})




test('Radio Button',async({page})=>{
        //Navigation
    const grid_card = page.locator('nb-card').filter({hasText:'Using the Grid'})
    //Method for Handling Rario Button */
    //await grid_card.getByLabel('Option 1').check({force:true})
    //await grid_card.getByRole('radio',{name:'Option 1'}).check({force:true})
    await grid_card.getByText('Option 1').check({force:true})

    //Method : Generic  Assertion Radio Button */
    const statusRadioOption1 = await grid_card.getByText('Option 1').isChecked()
    expect(statusRadioOption1).toBeTruthy()

    })
 