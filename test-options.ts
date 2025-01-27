import {test as base} from '@playwright/test'


export type TestOptions = { globalURL: string,formLayoutPage:string }
export const test = base.extend<TestOptions>({
    globalURL: ['', {option:true}],
    formLayoutPage: [async({page},use)=>{
        await page.goto ("/")
        await page.getByText("Forms").click()
        await page.getByText("Form Layout").click();
        await use("")
    },{auto:true}]
}) 