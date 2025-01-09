import {expect, test} from '@playwright/test'

test.beforeEach(async({page})=>{
    await page.goto ("https://www.google.com/")
  })


  test('01_InputFields',async({page})=>{
    const using_the_grid = page.locator('[class="gLFyf"]')
    await using_the_grid.fill('fardinahosan')
    await expect(await using_the_grid.inputValue()).toEqual('fardinahosan')
  })



