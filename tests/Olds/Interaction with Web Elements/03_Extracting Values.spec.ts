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

