import {expect, test} from '@playwright/test'
import { filter } from 'rxjs/operators';


test.describe('04_List&Dropdowns',()=>{

  test('01_DialogBoxes',async({page})=>{
    await page.goto('http://localhost:4200/')
    await page.getByText('Tables & Data').click()
    await page.getByText('Smart Table').click()

    //My Method : find direct tr on this page that filter by unique text that tr has.
    const table = await page.locator('tr').filter({hasText:'mdo@gmail.com'})

    //Artemix Bandor Method : find table then find all tr under that tbale and among these tr, we will filter using unique text
    const table02 = await page.getByRole('table').locator('tr',{hasText:'mdo'})

    

    //A Browser dialog box opend and we will perform Assertion and handle accept or dismiss or type on operation
    page.on('dialog',farLog =>{
      console.log(farLog.message())
      expect(farLog.message()).toEqual('Are you sure you want to delete?')

      farLog.accept()
    })
    //Click on Delete Icon
    await table02.locator('.nb-trash').click()


                           //My Made Assertion : 
    //await expect(...): This is an assertion to validate conditions in Playwright tests.
    //.toBeTruthy(): Checks if the value is truthy,
    // which means the filtered locator must return at least one row without the text 'mdo'.
    await expect(await page.getByRole('table').locator('tr',{hasNotText:'mdo'})).toBeTruthy()

                           //Artemis Made Assertion -bestt
    await expect(page.locator('table tr').first()).not.toHaveText('mdo@gmail.com')
  })
  


  test('02_JavaScriptD_Dialogs',async({page})=>{

    await page.goto('https://practice.expandtesting.com/js-dialogs')


    
    page.once('dialog',async(jsalert_01)=>{
      await expect.soft(jsalert_01.message()).toEqual('I am a Js Alert')
      await jsalert_01.accept()
      await expect.soft(page.locator('#dialog-response')).toHaveText('OK')
    })
    await page.getByText('Js Alert').click()


    
    page.once('dialog',async(jsconfirm_01)=>{
      await expect.soft(jsconfirm_01.message()).toEqual('I am a Js Confirm')
      await jsconfirm_01.dismiss()
      await expect.soft(page.locator('#dialog-response')).toHaveText('Cancel')
    })
    await page.getByText('Js Confirm').click()


    
    page.once('dialog',async(jsprompt_01)=>{
      await expect.soft(jsprompt_01.message()).toEqual('I am a Js prompt')
      await jsprompt_01.accept('fardinahosan')
      await expect.soft(page.locator('#dialog-response')).toHaveText('fardinahosan')
    })
    await page.getByText('Js Prompt').click()


  })
})