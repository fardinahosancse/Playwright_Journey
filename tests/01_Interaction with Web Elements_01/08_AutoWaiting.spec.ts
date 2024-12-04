import {expect, test} from '@playwright/test'
test.use({ ignoreHTTPSErrors: true }); // Add this line
test.beforeEach(async({page})=>{
    await page.goto ('https://uitestingplayground.com/ajax')
    await page.getByText('Button Triggering AJAX Request').click()
  })



test('08_Auto Waiting',async({page})=>{

  //click()- Comes with auto waiting
  //await page.getByText('Button Triggering AJAX Request').click()
  //await page.getByText('Data loaded with AJAX get request.').click()

  //textContent() - comes with auto waiting
 // const data = await page.getByText('Data loaded with AJAX get request.').textContent()
  //await expect(data).toEqual('Data loaded with AJAX get request.')

  //allTextContents() - doesnt comewith auto waiting
  const SuccessText = page.getByText('Data loaded with AJAX get request.')
  await SuccessText.waitFor({state:'attached'})
  const datas = await SuccessText.allTextContents()
  expect(datas).toContain('Data loaded with AJAX get request.')
})

test('08_WaitForSelector',async({page})=>{
  await page.waitForSelector('.bg-success')
  expect(await page.locator('.bg-success').allTextContents()).toContain('Data loaded with AJAX get request.')
})

test('08_WaitForResponse',async({page})=>{
  await page.waitForResponse('https://uitestingplayground.com/ajax')
  expect(await page.locator('.bg-success').allTextContents()).toContain('Data loaded with AJAX get request.')
})