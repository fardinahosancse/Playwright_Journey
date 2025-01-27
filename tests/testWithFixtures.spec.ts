import { PageManager } from '../page-objects/pageManager';
import { test } from '../test-options';
import { TestDataGenerator } from '../utility/testDataGenerator';


// test.beforeEach(async({page,globalURL})=>{
//     await page.goto (globalURL)
//   })

  test('VerifyFillingUsingTheGirdwithRequiredData',async({page,formLayoutPage})=>{
    const pm = new PageManager(page)
    //test data
    const randomPassword = TestDataGenerator.generatePassword()
    const randomEmail = TestDataGenerator.generateEmail();
    const randomFULLName = TestDataGenerator.generateFullName();

   //navigating and filling the form
    // await pm.navigateTo().pageFormLayout()
    await pm.onFormLayoutPage().submitUsingTheGirdWithCredentialAndSelectOption(randomEmail,randomPassword,'Option 1')
    await pm.onFormLayoutPage().submitInlineForm(randomFULLName,randomEmail,'Remember me',false)
  })





