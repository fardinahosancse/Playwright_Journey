import {expect, firefox, test} from '@playwright/test'
import { filter } from 'rxjs/operators';


test.describe('10_DragNDrop_Iframe', () => {
  test('01_Iframe_dragNdrop', async ({ page }) => {
    // Navigate to the test page
    await page.goto('https://jqueryui.com/droppable/');

    // Locate the iframe and elements inside it
    const iframeArea = page.frameLocator('.demo-frame');
    const draggable = iframeArea.locator('[id="draggable"]');
    const droppable = iframeArea.locator('[id="droppable"]');

    // Perform drag and drop
    await draggable.dragTo(droppable);

    // Assert that the drop was successful
    await expect.soft(droppable).toHaveText('Dropped!');
  });
});
