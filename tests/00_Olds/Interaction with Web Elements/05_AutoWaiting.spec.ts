import {test, expect} from '@playwright/test'
import { PagesComponent } from '../../src/app/pages/pages.component';
import { Exception, TRUE } from 'sass';


    test.beforeEach(async({page})=>{
        await page.goto("http://www.uitestingplayground.com/ajax")
    })

    test('Auto-Waiting_001 : Basic Wait',async({page})=>{
        //Header Code
        await page.locator('#ajaxButton').click()
        const vlocatorPath = page.locator('.bg-success').filter({hasText:'Data loaded with AJAX get request.'})

        //TextContent() - AutoWait for element to show up on the ui
        const visibleContent = vlocatorPath.textContent()
        expect (visibleContent).toEqual('Data loaded with AJAX get request.')

        //allTextContents() - Doesn't auto wait for elements to shows up on the UI
        await vlocatorPath.waitFor({state:'visible'})
        const visibleContentx = await vlocatorPath.allTextContents()
        expect (visibleContentx).toContain('Data loaded with AJAX get request.')

        //Locator Assertion Auto Wait 
         /**
            Imagine you are testing a web application with a login form that appears only after clicking a "Login" button.
            You want to ensure that after clicking the "Login" button, the login form becomes visible.
        */
        await vlocatorPath.waitFor({state:'visible'})
        expect(vlocatorPath).toBeVisible({visible:true})
  
        //Locator Assertion Auto Wait Example
        await vlocatorPath.waitFor({state:'attached'})
        expect(vlocatorPath).toHaveText('Data loaded with AJAX get request.',{timeout:2000}) //Override Custom Timeout for project need
    })

    test('Auto-Waiting_002: Alternative Waits',async({page})=>{
        //Handle When you are dealing with Fuction such as allTextContents() that do not have auto waiting
         /**
            
        */
        //Header Code
         await page.locator('#ajaxButton').click()
         const vlocatorPath = page.locator('.bg-success').filter({hasText:'Data loaded with AJAX get request.'})


         //Wait : 001 ---->>>   waitForSelector()
        //  await page.waitForSelector('.bg-success')
        //  const visibleContentx = await vlocatorPath.allTextContents()
        //  expect (visibleContentx).toContain('Data loaded with AJAX get request.')

         //Wait : 002 ---->>>   waitForResponse()
        //  const response = await page.waitForResponse('http://www.uitestingplayground.com/ajaxdata')
        //  expect (response.status()).toBe(200);

    })