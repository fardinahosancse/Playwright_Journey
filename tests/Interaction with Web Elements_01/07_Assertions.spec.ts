import {expect, test} from '@playwright/test'

test.beforeEach(async({page})=>{
    await page.goto ('http://localhost:4200/')
    await page.getByText('Forms').click()
    await page.getByText('Form Layout').click()
  })



test('07_Assertions',async({page})=>{

  //General Assertions
    const value =5
    expect(value).toEqual(5)
  
  //textContent() - To use for to get text
  const basicForm = await page.locator('nb-card').filter({hasText:"Basic form"})
  const buttonText = await basicForm.getByText('Submit').textContent() 
  expect(buttonText).toEqual('Submit')

  //locator assertions
  //await expect(basicForm).toHaveValue('Submit')

  //Soft Assertions
  await expect.soft(basicForm).toHaveValue('Submit')
  await basicForm.getByText('SUbmit').click()

})

