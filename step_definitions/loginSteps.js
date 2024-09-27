const { Given, When, Then } = require('@wdio/cucumber-framework');
const LoginPage = require('../pageobjects/login.page');

Given('I launch the app', async () => {
    await driver.launchApp();
    await LoginPage.waitForLoginScreen(); // Custom wait for the login screen
});

When('I enter {string} and {string}', async (username, password) => {
    await LoginPage.login(username, password);
});

Then('I should see the {string}', async (expectedResult) => {
    if (expectedResult === "Home screen") {
        // Add assertion for home screen
    } else {
        const actualMessage = await LoginPage.getErrorMessage();
        expect(actualMessage).toContain(expectedResult);
    }
});
