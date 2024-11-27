import {expect, test} from '@playwright/test'

test.beforeEach(async({page})=>{
    await page.goto ('http://localhost:4200/')
  })

test.describe('Form Layout Page: Using the Grid',()=>{
  test.beforeEach(async({page})=>{
    await page.getByText('Forms').click()
    await page.getByText('Form Layout').click()
  })

  test('01_InputFields',async({page})=>{
    const using_the_grid = page.locator('nb-card').filter({hasText:'Using the Grid'})
    await using_the_grid.getByPlaceholder('Email').fill('fardinahosan@gmail.com')
   // await using_the_grid.getByPlaceholder('Email').clear()
    //await using_the_grid.getByPlaceholder('Email').type('miao')

    //Generic Assertions
    await expect(await using_the_grid.getByPlaceholder('Email').inputValue()).toEqual('fardinahosan@gmail.com')

    //Locator  Assertions
    const dam = await using_the_grid.getByPlaceholder('Email')
    await expect(dam).toHaveValue('fardinahosan@gmail.com')
  })

})



