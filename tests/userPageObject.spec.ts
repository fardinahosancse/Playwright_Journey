import {expect, test} from '@playwright/test'
import { filter, timeout } from 'rxjs/operators';
import { NavigationPage } from './../page-objects/navigationPage';
import { FormLayoutPage } from '../page-objects/formLayoutPage';
import { time } from 'console';


test.beforeEach(async({page})=>{
    await page.goto ('http://localhost:4200/')
  })

  test('VerifyNaviagteToFormPage',async({page})=>{
    const navigateTo = new NavigationPage(page)
    await navigateTo.pageFormLayout()
    await timeout(1000)
    await expect.soft(await page.url()).toEqual('http://localhost:4200/pages/forms/layouts')
  })

  test('VerifyFillingUsingTheGirdwithRequiredData',async({page})=>{
    const navigateTo = new NavigationPage(page)
    const onFormLayoutPage = new FormLayoutPage(page)
    await navigateTo.pageFormLayout()
    await expect.soft(await page.url()).toEqual('http://localhost:4200/pages/forms/layouts')
    await onFormLayoutPage.submitUsingTheGirdWithCredentialAndSelectOption('fardinahosan@gmail.com','121121','Option 1')
  })

  test('VerifyFillingInlineFormwithRequiredData',async({page})=>{
    const navigateTo = new NavigationPage(page)
    const onFormLayoutPage = new FormLayoutPage(page)
    await navigateTo.pageFormLayout()
    //await timeout(2000)
    await expect.soft(await page.url()).toEqual('http://localhost:4200/pages/forms/layouts')
    await onFormLayoutPage.submitInlineForm('Fardin Ahosan','fardinahosan@gmail.com','Remember me',false)
  })




