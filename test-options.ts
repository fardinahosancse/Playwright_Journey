import {test as base} from '@playwright/test'
import { PageManager } from './page-objects/pageManager'

export type TestOptions = { 
    globalURL: string,
    formLayoutPage:string,
    pageManager:PageManager,

 }
export const test = base.extend<TestOptions>({
    //Global URL Fixture
    globalURL: ['', {option:true}],

    //Form Layout Page Fixture
    formLayoutPage: [async({page,globalURL},use)=>{
        await page.goto (globalURL)
        await page.getByText("Forms").click()
        await page.getByText("Form Layout").click();
        await use("")
    },{auto:true}],
     
    //Page Manager Fixture
    pageManager: async({page},use)=>{
        const pm = new PageManager(page)
        await use(pm)
    },
}) 