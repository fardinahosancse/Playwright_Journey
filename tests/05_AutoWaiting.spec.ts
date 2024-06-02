import {test, expect} from '@playwright/test'
import { PagesComponent } from '../src/app/pages/pages.component';
import { Exception, TRUE } from 'sass';

// test.describe('Test Suite 1', () =>{ //Test Suite

//     test('first test', () =>{ //Test

//     })


// })

    test.beforeEach(async({page})=>{
        await page.goto("http://www.uitestingplayground.com/ajax")
    })

    test("LocatorSyntaxRules",async({page})=>{
        //by tag name
        await page.locator("input").click()

        //by id
        await page.locator("#inputEmail1")

        //by class value
        await page.locator(".shape-rectangle")

        //by attribute
        await page.locator('[placeholder="Email"]') //html attribute

        //by class value full
        await page.locator('[class="input-full-width size-medium status-basic shape-rectangle nb-transition"]')

        //combine different selectors
        await page.locator('input#inputEmail1.shape-rectangle[placeholder="Email"]')

        //by using xpath (Not Recommended)
        await page.locator('////*[@id="inputEmail1"]')

        //by using partial  text match
        await page.locator(':text("Using")')

        //by using exact  text match
        await page.locator(':text-is("Using the Grid")')

    })

    test("User Facing Locators",async ({page}) =>{
        await page.getByRole("textbox",{name:"Email"}).first().click()
        await page.getByRole("button",{name:"SUBMIT"}).first().click()
        await page.getByLabel("Email").first().click()
        await page.getByPlaceholder("Message").click()

    })

    test('Child Element Locator',async({page})=>{
        await page.locator('nb-card nb-card-body :text-is("Option 1")').click()
        await page.locator('nb-card').locator('nb-card-body').locator(':text-is("Option 2")').click()
    })
    
    test('Child Element + USer Facing Locator +',async({page})=>{
        await page.locator('nb-card').locator('nb-card-body').getByRole('button',{name:"SIGN IN"}).first().click()
    })


    test('Parent Elements',async({page})=>{
        const blockForm = page.locator('nb-card').filter({hasText:'Block form'})
        const webShort =blockForm.filter({hasText:"Website"}).getByRole('textbox',{name:'Website'})

        await blockForm.filter({hasText:"First Name"}).getByPlaceholder("First Name").fill("S.M.Fardin")
        await blockForm.filter({hasText:"Last Name"}).getByPlaceholder("Last Name").fill("Ahosan")
        await blockForm.filter({hasText:"Email"}).getByRole('textbox',{name:'Email'}).fill("fardinaero1@gmail.com")
        await webShort.fill("fardin.com")
        await blockForm.filter({hasText:'Block form'}).getByRole('button',{name:'Submit'}).click()

        //First Assetions
        await expect(webShort).toHaveValue('fardin.com')

       
    })

    test('Extracting Values',async({page})=>{

        //Button Text Content
        const dirCardBody = await page.locator('nb-card nb-card-body')
        const buttonValue = dirCardBody.getByRole('button',{name:'SUBMIT'}).nth(1).textContent()
        await expect(buttonValue).toEqual('Submit')


        //Floating Text Element Data Extraction
        const textBoxExtraction = await page.locator('nb-card').getByText('Basic form').textContent()
        console.log(textBoxExtraction)
        await expect(textBoxExtraction).toEqual('Basic form')

        //All TEXT EXTRACTION
        const AllTextExtraction = await page.locator('nb-layout-column').allTextContents()
        await expect(AllTextExtraction).toContain('Check me out')

        //Input Field Data
        const inputField = await page.locator('nb-card nb-card-body').getByPlaceholder('Email').nth(0)
        await inputField.fill('fardinaero1@gmail.com')
        const inputFiledData = await inputField.inputValue()
        await expect(inputFiledData).toEqual('fardinaero1@gmail.com')

        //Placehlder -Attribute Validation
        const textBoxExtraction1 = await page.locator('nb-card').getByPlaceholder('Password').nth(1)
        const placeholderValidaton = await textBoxExtraction1.getAttribute('placeholder')
        await expect(placeholderValidaton).toEqual('Password')
       

    })



    test('Assertions',async({page})=>{
        //Genarel Assertion
        // const dirCardBody = await page.locator('nb-card nb-card-body')
        // const buttonValue = dirCardBody.getByRole('button',{name:'SUBMIT'}).nth(1).textContent()
        // await expect(buttonValue).toEqual('Submit')

        // Locator Assertion
        // const locatorAssertion = await page.locator('nb-card nb-card-body').getByRole('button',{name:'SUBMIT'}).nth(1)
        // expect(locatorAssertion).toHaveText('Submit')

        //Soft Assertion ****
        // const softAssertion = await page.locator('nb-card nb-card-body').getByRole('button',{name:'SUBMIT'}).nth(1)
        // expect.soft(softAssertion).toHaveText('Submitx')
        // await softAssertion.click()
    
    })

    test('Auto-Waiting',async({page})=>{

        //TextContent() - AutoWait for element to show up on the ui
        await page.locator('#ajaxButton').click()
        const vlocatorPath = page.locator('.bg-success').filter({hasText:'Data loaded with AJAX get request.'})
        // const visibleContent = vlocatorPath.textContent()
        // expect (visibleContent).toEqual('Data loaded with AJAX get request.')

        //allTextContents() - Doesn't auto wait for elements to shows up on the UI
        // await vlocatorPath.waitFor({state:'visible'})
        // const visibleContent = await vlocatorPath.allTextContents()
        // expect (visibleContent).toContain('Data loaded with AJAX get request.')

        //Locator Assertion Auto Wait 
         /**
            Imagine you are testing a web application with a login form that appears only after clicking a "Login" button.
            You want to ensure that after clicking the "Login" button, the login form becomes visible.
        */
        await vlocatorPath.waitFor({state:'visible'})
        expect(vlocatorPath).toBeVisible({visible:true})



        //Locator Assertion Auto Wait Example
        await vlocatorPath.waitFor({state:'attached'}) //Repsonible tor 
        expect(vlocatorPath).toHaveText('Data loaded with AJAX get request.')
    })