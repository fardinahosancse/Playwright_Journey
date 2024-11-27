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

    test('Assertions',async({page})=>{
        //Genarel Assertion
        const dirCardBody = await page.locator('nb-card nb-card-body')
        const buttonValue = dirCardBody.getByRole('button',{name:'SUBMIT'}).nth(1).textContent()
        await expect(buttonValue).toEqual('Submit')

        // Locator Assertion
        const locatorAssertion = await page.locator('nb-card nb-card-body').getByRole('button',{name:'SUBMIT'}).nth(1)
        expect(locatorAssertion).toHaveText('Submit')

        //Soft Assertion ****
        const softAssertion = await page.locator('nb-card nb-card-body').getByRole('button',{name:'SUBMIT'}).nth(1)
        expect.soft(softAssertion).toHaveText('Submitx')
        await softAssertion.click()
    
    })

