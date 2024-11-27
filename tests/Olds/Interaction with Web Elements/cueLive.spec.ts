import {test, expect} from '@playwright/test'
import { PagesComponent } from '../../src/app/pages/pages.component';
import { TRUE } from 'sass';

    test.beforeEach(async({page})=>{
        await page.goto("https://qa-ondemand.testingdxp.com/admin/#/")
        await page.locator('#P0-0').fill('qa-ondemand')
        await page.locator('#P0-1').fill('s1EU9Qi3-a')
    })

    test('T001_loginPage_VerifyloginPage',async({page})=>{
        const loginPage = await page.locator('#P0-0-label').allTextContents()
        await expect(loginPage).toContain('Id')
    })
    test('T002_id_VerifyValidInputFieldCredential',async({page})=>{
        const cueId = await page.locator('#P0-0').inputValue()
        await expect(cueId).toEqual('qa-ondemand')
    })
    test('T003_secret_VerifyValidInputFieldCredential',async({page})=>{
        const cueSecret = await page.locator('#P0-1').inputValue()
        await expect(cueSecret).toEqual('s1EU9Qi3-a')
    })
    test('T004_secret_VerifyValidInputFieldCredential',async({page})=>{
        const cueSecret = await page.locator('#P0-1').inputValue()
        await expect(cueSecret).toEqual('s1EU9Qi3-a')
    })

    
    
