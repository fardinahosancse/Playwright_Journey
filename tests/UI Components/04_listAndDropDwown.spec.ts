import { expect,test } from '@playwright/test';

test.beforeEach(async({page})=>{
    await page.goto("http://localhost:4200/")
    await page.getByText("Modal & Overlays").click()
    await page.getByText("Toastr").click()
})

test('ListAndDropdown',async({page})=>{
   const dropDownMenu= page.locator('ngx-header nb-select')
 

   
   //const optionList = page.getByRole('list').locator('nb-option') --- Method 1
  // const optionList = page.locator('nb-option-list nb-option') --- Method 2
  const optionList = page.locator('nb-option-list nb-option') // -- Method 3
  
  //nb-option-list - ul - nb-option(contains list) 
  //here, if select list using 'nb-option-list - ul/option-list or  .option-list  '
  // then check this doesnt return a list item rather than a solid text, if we add 'nb-option' then it will return a proper list
  

  // Check weather the list contain with our expected list items
   //await expect(optionList).toHaveText(['Light','Dark','Cosmic','Corporate'])
  // await optionList.filter({hasText:'Cosmic'}).click()

   //Color Assertion wheather after new theme selcted is actualy color changed?
   const header = page.locator('nb-layout-header')
  // await expect(header).toHaveCSS('background-color','rgb(50, 50, 89)')

   //Assertion for al theme as well as corresponding colors
   const colors ={
    'Light': 'rgb(255, 255, 255)',
    'Dark': 'rgb(34, 43, 69)',
    'Cosmic': 'rgb(50, 50, 89)',
    'Corporate': 'rgb(255, 255, 255)',
   }

  
   for(const colorLooper in colors){
     //Debugger
     console.log('Current Colors No:'+ colorLooper)
     console.log('Current Color is: '+ colors[colorLooper])


    await dropDownMenu.click()  
    await optionList.filter({hasText: colorLooper}).click()
    await expect(header).toHaveCSS('background-color',colors[colorLooper]) 
   }

}) 

test('Cleaned_ListAndDropdown',async({page})=>{
    //Select Dropdown
    const dropDownMenu= page.locator('ngx-header nb-select')
    //Get All Items Under dropdown as a list
    const optionList = page.locator('nb-option-list nb-option') 
    await expect(optionList).toHaveText(['Light','Dark','Cosmic','Corporate']) // List Value expectation
    //Access Header for css value
    const header = page.locator('nb-layout-header')

    //Object that contains Color Name and Value
    const colors ={
     'Light': 'rgb(255, 255, 255)',
     'Dark': 'rgb(34, 43, 69)',
     'Cosmic': 'rgb(50, 50, 89)',
     'Corporate': 'rgb(255, 255, 255)',
    }
 

   // We are performing  assertion on after selection changes it made on that.In this case , after selection background color is changing.
    await dropDownMenu.click()   
    for(const colorLooper in colors){
      //Debugger
      console.log('Current Colors No:'+ colorLooper)
      console.log('Current Color is: '+ colors[colorLooper])
     await optionList.filter({hasText: colorLooper}).click()
     await expect(header).toHaveCSS('background-color',colors[colorLooper]) 
     //Untill Color is 'Corporate' we will perfrom click on Dropdown
     if(colorLooper != 'Corporate'){
        await dropDownMenu.click()  
     }
    }
 
 }) 