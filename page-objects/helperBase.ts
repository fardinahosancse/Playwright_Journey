import { Page } from "@playwright/test";    

export class HelperBase{
    readonly helper:Page
    
    constructor(page:Page){
        this.helper=page
    }
}