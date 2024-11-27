import {expect, test} from '@playwright/test'

test.beforeEach(async({page})=>{
    await page.goto ('http://localhost:4200/')
  })

test.describe('Form Layout Page: Using the Grid',()=>{
  test.beforeEach(async({page})=>{
    await page.getByText('Forms').click()
    await page.getByText('Form Layout').click()
  })

  test('02_RadioButton',async({page})=>{

    //Radio Buttin Selection
    const using_the_grid = page.locator('nb-card').filter({hasText:'Using the Grid'})
    //await using_the_grid.getByText('Option 1').check()

    //Radio Buttin Selection if radio button is visually hidden (eg: native-input visually-hidden)
    await using_the_grid.getByText('Option 1').check({force:true})



    //////// Assertion: Generic
    const radioStatus = using_the_grid.getByText('Option 1').isChecked()
    //await expect(radioStatus).toBeTruthy()

    //////// Assertion: Locator
    await expect(using_the_grid.getByText('Option 1')).toBeChecked()

  })

  test('02_RadioButton_Exam',async({page})=>{
    
    const using_the_grid = page.locator('nb-card').filter({hasText:'Using the Grid'})

    //Select 'Option 1'
    await using_the_grid.getByRole('radio',{name:'Option 1'}).check({force:true})
    //Select 'Option 2'
    await using_the_grid.getByRole('radio',{name:'Option 2'}).check({force:true})

    //Assertion 'Option 2' is selelcted
    const radioStatus_02 = await using_the_grid.getByRole('radio',{name:'Option 2'}).isChecked()
    console.log('Option 2 is selected : '+radioStatus_02+' Expected: True')
    await expect.soft(radioStatus_02).toBeTruthy()

    //Assertion 'Option 1' is de-selelcted
    const radioStatus_01 = await using_the_grid.getByRole('radio',{name:'Option 1'}).isChecked()
    console.log('Option 1 is selected : '+radioStatus_01+' Expected: False')
    await expect.soft(radioStatus_01).toBeFalsy()

  })

})



