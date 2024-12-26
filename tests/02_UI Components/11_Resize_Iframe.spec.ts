import {expect, firefox, test} from '@playwright/test'
import { filter } from 'rxjs/operators';



  test('01_ReSize_iFrame', async ({ page }) => {
    // Navigate to the test page
    await page.goto('https://jqueryui.com/resizable/');

    // Locate the iframe and elements inside it
    const iframeArea = page.frameLocator('.demo-frame');
   
    //Resize Handle
    const resizseHandle = iframeArea.locator('#resizable [class="ui-resizable-handle ui-resizable-se ui-icon ui-icon-gripsmall-diagonal-se"]');
    
    //Math of Bounding Box
    const box = await resizseHandle.boundingBox()
    const x =  box.x + box.width/2
    const y = box.y + box.height/2

    //Move the mouse to the center of the handle:
    await page.mouse.move(x,y)

    //Press the mouse button (click and hold):
    await page.mouse.down()

    //Move the mouse to the new position (resize action):
    await page.mouse.move(x+50,y)
    await page.mouse.move(x+50,y+80)

    //Release the mouse button (complete the resize):
    await page.mouse.up()
    
  });
