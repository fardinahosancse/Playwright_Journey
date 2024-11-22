import {test} from '@playwright/test'
import { filter } from 'rxjs/operators';

test.beforeEach(async({page})=>{
  await page.goto ('http://localhost:4200/')
  await page.getByText('Forms').click()
  await page.getByText('Form Layout').click()
})

test('04_ParentElements',async({page})=>{
  

// Our goal is to find elements in the most efficient way possible using their unique attributes.
// Sometimes elements can be located easily, but it can get tricky when elements share the same name.
// It is not a good practice to use nth() or first() – as websites become dynamic, elements may shift, making refactoring a real hassle.
// Our goal here is to write the script in such a way that, regardless of changes to backend or frontend components, it will reliably find the element using a user-facing technique.


  const location = page.locator('nb-card')

  //Method 1 : Detect by has text
  /** 
   * Breakdown:
   * "Fill 'Fardin Ahosan' in the element located under the nb-card block(location), within the sub-block where the header text is 'Using the Grid'."  
   * */
  await location
  .filter({hasText:'Using the Grid'})
  .getByPlaceholder('Email')
  .fill('FardinAhosan')

  //Method 2 : Find my element with particular element id
  await location
  .filter({has:page.locator('#inputEmail1')})
  .getByPlaceholder('Email')
  .fill('FardinAhosan')


  //Method 3 : Powerfull Technique
  await location // location : Non-User Facing Locator as user dont see 'nb-card'
  .filter({has:page.locator('nb-checkbox')}) //Non-User Facing Locator as user dont see 'nb-checkbox'
  .filter({hasText:"Sign in"}) //User Facing - User Sees Sign in Text
  .getByPlaceholder('Email') //User Facing - User Sees Email Placeholder
  .fill('Hello') // Action on elements

  //


  
})