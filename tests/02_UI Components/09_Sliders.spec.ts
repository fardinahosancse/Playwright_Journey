import {expect, firefox, test} from '@playwright/test'
import { filter } from 'rxjs/operators';


test.describe('08_SLiders',()=>{
  test('01_Sliders_Scensario_ShortCut',async({page})=>{
    await page.goto('http://localhost:4200/')

    const slider = await page.locator('[tabtitle="Temperature"] ngx-temperature-dragger circle')
    await slider.evaluate(node=>{
      node.setAttribute('cx','10.1207')
      node.setAttribute('cy','122.901')
    })
    await slider.click()

  })


  test('02_Sliders_Scensario_Estimutlate_Exactly_Mouse_MOvement',async({page})=>{
    await page.goto('http://localhost:4200/')

    const slider = await page.locator('[tabtitle="Temperature"] ngx-temperature-dragger circle')
    await slider.evaluate(node=>{
      node.setAttribute('cx','10.1207')
      node.setAttribute('cy','122.901')
    })
    await slider.click()

  })
})
