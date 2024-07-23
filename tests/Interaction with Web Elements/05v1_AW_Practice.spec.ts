import {test, expect} from '@playwright/test'
import { PagesComponent } from '../../src/app/pages/pages.component';
import { Exception, TRUE } from 'sass';
import { state } from '@angular/animations';


    test.beforeEach(async({page})=>{
        await page.goto("http://www.uitestingplayground.com/ajax")
    })

    test('WaitFor',async({page})=>{
        //Header Code
        await page.locator('#ajaxButton').click()
        const vlocatorPath = page.locator('.bg-success').filter({hasText:'Data loaded with AJAX get request.'})

         //Wait : 001 ---->>>   waitForSelector()
         await page.waitForSelector('.bg-success',{state:'attached'})
         const visibleContentx = await vlocatorPath.allTextContents()
         expect (visibleContentx).toContain('Data loaded with AJAX get request.')




  
       
    })