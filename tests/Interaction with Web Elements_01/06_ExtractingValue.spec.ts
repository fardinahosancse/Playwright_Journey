import {expect, test} from '@playwright/test'

test.beforeEach(async({page})=>{
    await page.goto ('http://localhost:4200/')
    await page.getByText('Forms').click()
    await page.getByText('Form Layout').click()
  })



test('06_Extracting_Values',async({page})=>{

      //textContent() - To use for to get text
    const basicForm = page.locator('nb-card').filter({hasText:"Basic form"})
    const buttonText = await basicForm.getByText('SUBMIT').textContent()
    console.log ('Expected: Submit  -  Actual : '+buttonText+'')
    expect(buttonText).toEqual('Submit')

      //All text content () - To get all text
     const usingthegird = page.locator('nb-card').filter({hasText:'Using the Grid'})
     const allText = await usingthegird.locator('nb-radio').allTextContents()
     expect(allText).toContain('Option 1')

     // inputvalue extraction
     const emailfill = 'Fardin Esha'
     await basicForm.getByPlaceholder('Email').fill(emailfill)
     const input_value = await basicForm.getByPlaceholder('Email').inputValue()
     console.log ('Expected: '+emailfill+'  -  Actual : '+input_value+'')
     expect(input_value).toEqual('Fardin Esha')

})

