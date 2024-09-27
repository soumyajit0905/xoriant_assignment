import { Given, When, Then } from '@wdio/cucumber-framework';
import LoginPage from '../pageobjects/login.page';


// Step: Given the user is on the login screen
Given('the user is on the login screen', async () => {
    const appId = 'com.swaglabsmobileapp'; // replace with your app's package name
    await driver.execute('mobile: activateApp', { appId });
    await LoginPage.waitForLoginScreen();
});

// Step: When the user enters "<username>" and "<password>"
When('the user enters {string} and {string}', async (username, password) => {
    await LoginPage.login(username, password);
});

// Step: And clicks the login button
When('clicks the login button', async () => {
    await LoginPage.clickLoginButton();
});

// Step: Then the login should be "<expectedOutcome>"
Then('the login should be {string}', async (expectedOutcome) => {
    const isLoginSuccessful = expectedOutcome === 'success';
    if (isLoginSuccessful) {
        // Check if the menu breadcrumb is displayed
        expect(await LoginPage.isMenuBreadcrumbDisplayed()).toBe(true);
    } else {
        // Check if the error message is displayed
        expect(await LoginPage.isErrorMessageDisplayed()).toBe(true);
    }
});

// Step: And the user should see the error message "<errorMessage>"
Then('the user should see the error message {string}', async (errorMessage) => {
    expect(await LoginPage.getErrorMessage()).toEqual(errorMessage);
});
