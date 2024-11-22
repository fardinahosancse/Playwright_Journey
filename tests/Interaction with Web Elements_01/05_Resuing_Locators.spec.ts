import {test} from '@playwright/test'
import { filter } from 'rxjs/operators';

test.beforeEach(async({page})=>{
  await page.goto ('http://localhost:4200/')
  await page.getByText('Forms').click()
  await page.getByText('Form Layout').click()
})

test('05_Reusing Locators',async({page})=>{
  

// Our goal is to find elements in the most efficient way possible using their unique attributes.
// Sometimes elements can be located easily, but it can get tricky when elements share the same name.
// It is not a good practice to use nth() or first() – as websites become dynamic, elements may shift, making refactoring a real hassle.
// Our goal here is to write the script in such a way that, regardless of changes to backend or frontend components, it will reliably find the element using a user-facing technique.


  const location = page.locator('nb-card') 
  await location
  .filter({hasText:'Using the Grid'})
  .getByPlaceholder('Email')
  .fill('FardinAhosan')



  
})