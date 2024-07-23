import { expect,test } from '@playwright/test';

test.beforeEach(async({page})=>{
    await page.goto("http://localhost:4200/")
    await page.getByText("Forms").click()
    await page.getByText("Form Layouts").click()
    
})




 test('InputField_00',async({page})=>{
        //Navigation
    
    const grid_card = page.locator('nb-card').filter({hasText:'Using the Grid'})
    //Email Input Field Detecvtion
    const grid = grid_card.getByPlaceholder('Email')
    await grid.fill('fardinahosan@gmail.com')
    // Locator Assertion
    await expect(grid).toBeVisible()
    await expect(grid).toHaveValue('fardinahosan@gmail.com')
        
    })



