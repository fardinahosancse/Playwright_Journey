import { expect,test } from '@playwright/test';

test.beforeEach(async({page})=>{
    await page.goto("http://localhost:4200/")
    await page.getByText("Modal & Overlays").click()
    await page.getByText("Toastr").click()
})

test('Checkboxes',async({page})=>{
    // await page.getByRole('checkbox',{name:'Hide on click'}).uncheck({force:true})
    // await page.getByRole('checkbox',{name:'Prevent arising of duplicate toast'}).check({force:true})
    // For All Checkbox on a page
    const checkboxSection = page.locator('nb-layout-column').getByRole('checkbox')
    for(const checknox of await checkboxSection.all()){
        await checknox.check({force:true})
        expect(await checknox.isChecked()).toBeTruthy()
    }

}) 