import {expect, test} from '@playwright/test'
import { filter } from 'rxjs/operators';


test.describe('04_List&Dropdowns',()=>{
  test.beforeEach(async({page})=>{
    await page.goto('http://localhost:4200/')
    await page.getByText('Modal & Overlays').click()
    await page.getByText('Tooltip').click()
  })

  test('01_Tooltips',async({page})=>{
    //const tooltip = await page.locator('nb-card',{hasText:'Tooltip Placements'})
    const tooltip = await page.locator('nb-card nb-card-body')
    await tooltip.getByText('Top').hover()

    //Locator Assertions
  //  const tooltipTexT = await page.locator('.cdk-overlay-container nb-tooltip')
  //  await expect(tooltipTexT).toHaveText('This is a tooltip')

   //Genereic Assertion
   const tooltipTexT = await page.locator('.cdk-overlay-container nb-tooltip').textContent()
   await expect(tooltipTexT).toEqual('This is a tooltip')

  })
  
})