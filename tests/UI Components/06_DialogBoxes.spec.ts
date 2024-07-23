import { expect,test } from '@playwright/test';
import { expand } from 'rxjs-compat/operator/expand';
import { filter } from 'rxjs/operators';



test('BrowserDialogBox',async({page})=>{
    await page.goto("http://localhost:4200/")
    await page.getByText("Tables & Data").click()
    await page.getByText("Smart Table").click()

        //Add Listener for handing browser dialog boxes
        page.on('dialog',dialog=>{
            //dilaog message assertion
            expect(dialog.message()).toEqual('Are you sure you want to delete?')
            dialog.accept()
        })

    await page.getByRole('table').locator('tr' , {hasText:'mdo@gmail.com'}).locator('.nb-trash').click()

    //Assertion for does delete actualy happend?
    await expect(page.locator('table tr').first()).not.toHaveText('mdo@gmail.com')



 })  
 test('WebDialogBox',async({page})=>{
    await page.goto("http://localhost:4200/")
    await page.getByText("Modal & Overlays").click()
    await page.getByText("Dialog").click()

    await page.locator('nb-layout-column nb-card nb-card-body').getByRole('button',{name:'Open Dialog with component'}).click()
    const dialogBox = page.locator('nb-layout nb-dialog-container nb-card')
    await expect (dialogBox.locator('nb-card-header')).toHaveText('This is a title passed to the dialog component')
    await dialogBox.locator('nb-card-footer').getByRole('button',{name:'Dismiss Dialog'}).click()
 })  

 test('WebDialogBox_ReturnResultFromDialog',async({page})=>{
    await page.goto("http://localhost:4200/")
    await page.getByText("Modal & Overlays").click()
    await page.getByText("Dialog").click()

    //Click to 'Enter Name' button
    await page.getByRole('button',{name:'Enter Name'}).click()

    ///Dialog box location
    const dialogBox = page.locator('nb-layout nb-dialog-container nb-card')

    //Verify dialog box open
    await expect (dialogBox.locator('nb-card-header')).toHaveText('Enter your name')

    //Input the the dialog box
    await dialogBox.locator('nb-card-body').getByPlaceholder('Name').fill('Fardin')
    await dialogBox.locator('nb-card-footer').getByRole('button',{name:'SUBMIT'}).click()

    //Assertion for Input being  showen up to the ui
    await expect(page.locator('nb-card-body ul')).toHaveText('Fardin')

 })  