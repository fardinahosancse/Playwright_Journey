import {expect, test} from '@playwright/test'
import { filter } from 'rxjs/operators';


test.describe('04_List&Dropdowns',()=>{
  test.beforeEach(async({page})=>{
    await page.goto ('http://localhost:4200/')
  })

  test('01_Check_all_options_are_present',async({page})=>{
    const dropdown = page.locator('ngx-header nb-select')
    //Dropdown will expanded
    await dropdown.click()
    //Now Perform Click/Select on Exnpanded List Button 
    const optionsDropdown = page.locator('.cdk-overlay-container nb-option-list nb-option')
    await expect(optionsDropdown).toHaveText(['Light','Dark','Cosmic','Corporate'])
  })

  test('02_Verify_Selection_From_Dropdown_Using_UI_Update',async({page})=>{

    //Step 1 : Click on Dropdown
    //Step 2 : CLick on Dropdown item
    //Step 3 : Check on the header of dropdown.
    //Step 4:  Assertions on UI Selection Text Update


      //Step 1 : Click on Dropdown
    const dropdown = page.locator('ngx-header nb-select')
    await dropdown.click()


      //Step 2 : CLick on Dropdown item
    const optionsDropdown = page.locator('.cdk-overlay-container nb-option-list nb-option')
    await optionsDropdown.getByText('Cosmic').click()


      //Step 3 : Check on the header of dropdown.
     const buttonValue = await dropdown.locator('button')

      //Step 4:  Assertions on UI Selection Text Update
     await expect(buttonValue).toHaveText('Cosmic')

  })

  test('03_Verify_Selection_From_Dropdown_Using_CSS_Update',async({page})=>{

    //Step 1 : Click on Dropdown
    //Step 2 : CLick on Dropdown item
    //Step 3 : Check the Color Change of the UI
    //Step 4:  Assertions on UI(CSS)


      //Step 1 : Click on Dropdown
    const dropdown = page.locator('ngx-header nb-select')
    await dropdown.click()


      //Step 2 : CLick on Dropdown item
    const optionsDropdown = page.locator('.cdk-overlay-container nb-option-list nb-option')
    await optionsDropdown.getByText('Cosmic').click()



      //Step 3 & 4:  Assertions on UI Selection Text Update
     await expect(await page.locator('nb-layout-header')).toHaveCSS('background',"rgb(50, 50, 89)")

  })


  test('04_Verify_ALL_Selection_From_Dropdown_Using_CSS_Update',async({page})=>{

    const dropdown = page.locator('ngx-header nb-select')
    const optionsDropdown = page.locator('.cdk-overlay-container nb-option-list nb-option')

const colors ={
  'Light': 'rgb(255, 255, 255)',
  'Dark': 'rgb(34, 43, 69)',
  'Cosmic': 'rgb(50, 50, 89)',
  'Corporate': 'rgb(255, 255, 255)',
 }

 await dropdown.click()
 for (const color in colors){
  await optionsDropdown.getByText(color).click()
  await expect(await page.locator('nb-layout-header')).toHaveCSS('background', colors[color])
  if(color != 'Corporate'){
    await dropdown.click()
  }

 }

  })
})