import {test, expect} from '@playwright/test'
import { PagesComponent } from '../../src/app/pages/pages.component';
import { Exception, TRUE } from 'sass';

// test.describe('Test Suite 1', () =>{ //Test Suite

//     test('first test', () =>{ //Test

//     })


// })

    test.beforeEach(async({page})=>{
        await page.goto("http://localhost:4200/")
        await page.getByText("Forms").click()
        await page.getByText("Form Layouts").click()
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