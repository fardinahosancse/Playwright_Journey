import { expect,test } from '@playwright/test';
import { expand } from 'rxjs-compat/operator/expand';

test.beforeEach(async({page})=>{
    await page.goto("http://localhost:4200/")
    await page.getByText("Modal & Overlays").click()
    await page.getByText("Tooltip").click()
})

test('Text_ToolTips',async({page})=>{
    await page.locator('nb-card-body').getByRole('button',{name:'Top'}).hover()
    const tooltip = await page.locator('nb-tooltip').textContent()
    await expect(tooltip).toEqual('This is a tooltip')
 })  
 test('Color_ToolTips',async({page})=>{
    await page.locator('nb-card-body').getByRole('button',{name:'Top'}).hover()
    const tooltipLocation = page.locator('nb-tooltip')
    //Css Assertion
    await expect(tooltipLocation).toHaveCSS('background',"rgb(21, 26, 48) none repeat scroll 0% 0% / auto padding-box border-box")
 })  