import {test} from '@playwright/test'

test.beforeEach(async({page})=>{
  await page.goto ('http://localhost:4200/')
  await page.getByText('Forms').click()
  await page.getByText('Form Layout').click()
})


test.skip('01_Locator Syntax Rules',async({page})=>{
  //Tag Name
  page.locator('input')

  // Id
  page.locator('.inputEmail1')

  // Class
  page.locator('#shape-rectangle') //Full class name can be used too

  //Attribute
  page.locator('[placeholder="Email"]')


  //Combine different seelctors
  page.locator('#shape-rectangle[placeholder="Email"].inputEmail1')

  //Xpath - Not Recomanded
  page.locator('')

  //Partial Text Match
  page.locator(":text('Using')")

  //Extact ExpectedText Match
  page.locator(":text-is('Using the Grid')")
})


