import {expect, test} from '@playwright/test'
import { filter } from 'rxjs/operators';
import { NavigationPage } from './../page-objects/navigationPage';


test.beforeEach(async({page})=>{
    await page.goto ('http://localhost:4200/')
  })

  test('navigateToFormPage',async({page})=>{
    const navigateTo = new NavigationPage(page)
    await navigateTo.pageFormLayout()
    await navigateTo.pageDatePicker()
  })

  test('navigateTowebTablePage',async({page})=>{
    const navigateTo = new NavigationPage(page)
    await navigateTo.pageWebTable()
  })

  test('navigateToToasterPage',async({page})=>{
    const navigateTo = new NavigationPage(page)
    await navigateTo.pageToaster()
  })

  test('navigateToTooltipPage',async({page})=>{
    const navigateTo = new NavigationPage(page)
    await navigateTo.pageTooltip()
  })

