import { Page } from "@playwright/test";
import { fileURLToPath } from "url";

export class FormLayoutPage{
    private readonly page : Page

    constructor(page){
        this.page = page
    }

    /**
     * 
     * @param email -Porvide valid email address that must contain @
     * @param password - Provide Password of 1U,1L,1N,1SC total 7 digit
     * @param optionText - Provide Option Name to choose
     */
    async submitUsingTheGirdWithCredentialAndSelectOption(email:string,password:string,optionText:string){
        const usingTheGird = this.page.locator('nb-layout-column nb-card').filter({hasText:'Using the Grid'})
        await usingTheGird.getByPlaceholder('Email').fill(email)
        await usingTheGird.getByPlaceholder('Password').fill(password)
        await usingTheGird.getByRole('radio',{name:optionText}).check({force:true})
        await usingTheGird.getByText('Sign in').click()
    }

    /**
     * 
     * @param name - Provide Full Name
     * @param email -Porvide valid email address that must contain @
     * @param checkBoxName -Provide CheckBox Name
     * @param checkBoxState - Provide Checkbox state
     */

    async submitInlineForm(name:string,email:string,checkBoxName:string,checkBoxState:boolean){
        const usingTheGird = this.page.locator('nb-layout-column nb-card').filter({hasText:'Inline form'})
        await usingTheGird.getByPlaceholder('Jane Doe').fill(name)
        await usingTheGird.getByPlaceholder('Email').fill(email)
        if(checkBoxState === true){
            await usingTheGird.getByRole('checkbox',{name:checkBoxName}).check({force:true})
        }

        await usingTheGird.getByText('Submit').click()
    }
}