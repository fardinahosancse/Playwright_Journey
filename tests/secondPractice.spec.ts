import {test} from '@playwright/test'


//before each
test.beforeEach(async({page})=>{
    await page.goto("http://localhost:4200/")
    await page.getByText("Forms").click()
    await page.getByText("Form Layouts").click()
})

test("Practice_01",async({page})=>{
    await page.locator("nb-card-body").getByRole("textbox",{name:"Password"}).first().click()
})