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

    const tempBox = await page.locator('[tabtitle="Temperature"] ngx-temperature-dragger')
    await tempBox.scrollIntoViewIfNeeded()

    const box = await tempBox.boundingBox()
    const x =  box.x + box.width/2
    const y = box.y + box.height/2

    await page.mouse.move(x,y)
    await page.mouse.down()
    await page.mouse.move(x+50,y)
    await page.mouse.move(x+50,y-200)
    await page.mouse.up()
    


  })

  test('03_Sliders_Scensario_DragTo',async({page})=>{
    await page.goto('http://localhost:4200/');

    // Locate the draggable element
    const tempBox = await page.locator('[tabtitle="Temperature"] ngx-temperature-dragger');
    
    // Scroll the element into view
    await tempBox.scrollIntoViewIfNeeded();
    
    // Locate the target position for dragging
    const targetX = 100; // Offset: Move 100 pixels right
    const targetY = -100; // Offset: Move 100 pixels up
    
    // Perform the drag-and-drop using the dragTo method
    const targetLocator = tempBox.locator(`..`); // Drag relative to the same container
    await tempBox.dragTo(targetLocator, {
      sourcePosition: { x: 0, y: 0 }, // Start position (relative to the element)
      targetPosition: { x: targetX, y: targetY }, // Target offset
      force: true, // Ensures the drag works even if the element isn't interactable
    });
    
  })

})
