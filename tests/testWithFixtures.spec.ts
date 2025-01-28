import { test } from '../test-options';
import { TestDataGenerator } from '../utility/testDataGenerator';

test('VerifyFillingUsingTheGirdwithRequiredData', async({ pageManager }) => {
    const randomPassword = TestDataGenerator.generatePassword();
    const randomEmail = TestDataGenerator.generateEmail();
    const randomFULLName = TestDataGenerator.generateFullName();

    await pageManager.onFormLayoutPage().submitUsingTheGirdWithCredentialAndSelectOption(randomEmail, randomPassword, 'Option 1');
    await pageManager.onFormLayoutPage().submitInlineForm(randomFULLName, randomEmail, 'Remember me', false);
});
