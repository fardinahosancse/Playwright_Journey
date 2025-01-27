import {expect} from '@playwright/test'
import { filter, timeout } from 'rxjs/operators';
import { PageManager } from '../page-objects/pageManager';  
import { TestDataGenerator } from '../utility/testDataGenerator';
import { test } from '../test-options';


test.beforeEach(async({page,globalURL})=>{
    await page.goto (globalURL)
  })

  test('VerifyNaviagteToFormPage @smoke',async({page})=>{
    const pm = new PageManager(page)
    await pm.navigateTo().pageFormLayout()
    await timeout(1000)
    await expect.soft(await page.url()).toEqual('http://localhost:4200/pages/forms/layouts')
  })

  test('VerifyFillingUsingTheGirdwithRequiredData',async({page})=>{
    const pm = new PageManager(page)
    await pm.navigateTo().pageFormLayout()
    //test data
    const randomPassword = TestDataGenerator.generatePassword()
    const randomEmail = TestDataGenerator.generateEmail();

    await expect.soft(await page.url()).toEqual('http://localhost:4200/pages/forms/layouts')
    await pm.onFormLayoutPage().submitUsingTheGirdWithCredentialAndSelectOption(randomEmail,randomPassword,'Option 1')
  })

  test('VerifyFillingInlineFormwithRequiredData',async({page})=>{
    const pm = new PageManager(page)
    await pm.navigateTo().pageFormLayout()
    await timeout(2000)
    await expect.soft(await page.url()).toEqual('http://localhost:4200/pages/forms/layouts')
    await pm.onFormLayoutPage().submitInlineForm('Fardin Ahosan','fardinahosan@gmail.com','Remember me',false)
  })

  test('VerifyCommonDateSelectionFroDatePickerPage',async({page})=>{
    const pm = new PageManager(page)
    await pm.navigateTo().pageDatePicker()
    await pm.onDatePickerPage().selectCommonDatePickerFromToday(450)
  })

  test('VerifyRangeDateSelectionFromDatePickerPage',async({page})=>{
    const pm = new PageManager(page)
    await pm.navigateTo().pageDatePicker()
    await pm.onDatePickerPage().selectDatewitRangeFromToday(5,10)
  })  




