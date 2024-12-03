import {expect, test} from '@playwright/test'


test.describe('Checkboxes',()=>{
  test.beforeEach(async({page})=>{
    await page.goto ('https://practice.expandtesting.com/checkboxes')
  })

  test('Checkboxes',async({page})=>{
    // Locate all checkboxes
    const checkboxes = await page.getByRole('checkbox')

    for(const checkx of await checkboxes.all()){
      console.log(checkx)
      await checkx.check({force:true})
      expect(await checkx.isChecked()).toBeTruthy()
    }

  })


})