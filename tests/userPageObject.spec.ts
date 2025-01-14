import {expect, test} from '@playwright/test'
import { filter, timeout } from 'rxjs/operators';
import { NavigationPage } from './../page-objects/navigationPage';
import { FormLayoutPage } from '../page-objects/formLayoutPage';
import { time } from 'console';
import { DatePickerPage } from '../page-objects/datePickerPage';
import { TestDataGenerator } from '../utility/testDataGenerator';


test.beforeEach(async({page})=>{
    await page.goto ('http://localhost:4200/')
  })

  test('VerifyNaviagteToFormPage @smoke',async({page})=>{
    const navigateTo = new NavigationPage(page)
    await navigateTo.pageFormLayout()
    await timeout(1000)
    await expect.soft(await page.url()).toEqual('http://localhost:4200/pages/forms/lay outs')
  })

  test('VerifyFillingUsingTheGirdwithRequiredData',async({page})=>{
    const navigateTo = new NavigationPage(page)
    const onFormLayoutPage = new FormLayoutPage(page)
    await navigateTo.pageFormLayout()
    //test data
    const randomPassword = TestDataGenerator.generatePassword()
    const randomEmail = TestDataGenerator.generateEmail();

    await expect.soft(await page.url()).toEqual('http://localhost:4200/pages/forms/layouts')
    await onFormLayoutPage.submitUsingTheGirdWithCredentialAndSelectOption(randomEmail,randomPassword,'Option 1')
  })

  test('VerifyFillingInlineFormwithRequiredData',async({page})=>{
    const navigateTo = new NavigationPage(page)
    const onFormLayoutPage = new FormLayoutPage(page)
    await navigateTo.pageFormLayout()
    await timeout(2000)
    await expect.soft(await page.url()).toEqual('http://localhost:4200/pages/forms/layouts')
    await onFormLayoutPage.submitInlineForm('Fardin Ahosan','fardinahosan@gmail.com','Remember me',false)
  })

  test('VerifyCommonDateSelectionFroDatePickerPage',async({page})=>{
    const navigateTo = new NavigationPage(page)
    const onDatePickerPage = new DatePickerPage(page)
    await navigateTo.pageDatePicker()
    await onDatePickerPage.selectCommonDatePickerFromToday(450)
  })

  test('VerifyRangeDateSelectionFromDatePickerPage',async({page})=>{
    const navigateTo = new NavigationPage(page)
    const onDatePickerPage = new DatePickerPage(page)
    await navigateTo.pageDatePicker()
    await onDatePickerPage.selectDatewitRangeFromToday(5,10)
  })  




