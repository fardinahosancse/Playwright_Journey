import { faker } from '@faker-js/faker';

export class TestDataGenerator {
    static generateFullName() {
        return faker.person.fullName();
    }

    static generateEmail() {
        return faker.internet.email();
    }

    static generatePassword() {
        return faker.internet.password();
    }
}
