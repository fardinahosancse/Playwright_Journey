import {test, expect} from '@playwright/test'
import { PagesComponent } from './../src/app/pages/pages.component';
import { TRUE } from 'sass';

    test.beforeEach(async({page})=>{
        
        await page.goto("https://qa-ondemand.testingdxp.com/admin/#/")
        await page.locator('#P0-0').fill('qa-ondemand')
        await page.locator('#P0-1').fill('s1EU9Qi3-a')
        await page.locator('#app').getByRole('button',{name:'Login'}).click()
        const slider = await page.locator('swiper-wrapper')
        await slider.getByRole('textbox',{name:'Real Time'}).click()
    })

    test('TC_001_RealTime_VerifyRealTime',async({page})=>{

        const realtime_title = await page.locator('#app').allTextContents()
        await expect(realtime_title).toContain('On-Demand Flow Chart')
    })