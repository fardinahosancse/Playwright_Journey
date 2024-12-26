import {expect, firefox, test} from '@playwright/test'
import { filter } from 'rxjs/operators';



  test('01_ReSize_iFrame', async ({ page }) => {
    // Navigate to the test page
    await page.goto('https://jqueryui.com/selectable/');

    // Locate the iframe and elements inside it
    const iframeArea = page.frameLocator('.demo-frame');


    //SelectLocation
    const selectStart = iframeArea.locator('.ui-selectable li').nth(1)
   

  
    //Math of Bounding Box
    const box = await selectStart.boundingBox()
    const x =  box.x + box.width/2
    const y = box.y + box.height/2

    //Move the mouse to the center of the handle:
    await page.mouse.move(x,y)

    //Press the mouse button (click and hold):
    await page.mouse.down()

    //Move the mouse to the new position (resize action):
    await page.mouse.move(x+0,y)
    await page.mouse.move(x+0,y+150)

    //Release the mouse button (complete the resize):
    await page.mouse.up()
    
  });
