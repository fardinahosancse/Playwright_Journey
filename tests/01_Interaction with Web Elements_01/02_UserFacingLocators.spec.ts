import {test} from '@playwright/test'

test.beforeEach(async({page})=>{
  await page.goto ('http://localhost:4200/')
  await page.getByText('Forms').click()
  await page.getByText('Form Layout').click()
})

test('02_User Facing Locator',async({page})=>{
  //getByRole
  await page.getByRole('button',{name:'Submit'}).first().click()
  //getByLabel
  await page.getByLabel('Email').first().fill('fardinahosan@gmail.com')
  //getByPlaceholder
  await page.getByPlaceholder('First Name').fill('Esha')
  //getByText
  await page.getByText('Website').click()
  //getByTitle
  await page.getByTitle('Extra Components').click()
  //getByTestId (Not - User Facing) - (data-testid)
})
