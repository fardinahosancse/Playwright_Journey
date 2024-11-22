import {test} from '@playwright/test'

test.beforeEach(async({page})=>{
  await page.goto ('http://localhost:4200/')
  await page.getByText('Forms').click()
  await page.getByText('Form Layout').click()
})

test('03_Child Elements',async({page})=>{
  await page.locator('nb-card').getByPlaceholder('Email').click()
  await page.locator('nb-card #inputEmail').fill('1')
  //Using nth() ot first() is not a good practice as element location can be chnaged.
})