import {expect, test} from '@playwright/test'
import { filter } from 'rxjs/operators';
import {NavigationPage } from './../page-objects/navigationPage';

test.beforeEach(async({page})=>{
    await page.goto ('http://localhost:4200/')
  })

  test('navigateToFormPage',async({page})=>{
    const navigateTo = new NavigationPage(page)
    await navigateTo.formLayoutsPage()

  })