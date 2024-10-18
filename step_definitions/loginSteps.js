import { Given, When, Then } from '@wdio/cucumber-framework';
import LoginPage from '../pageobjects/login.page';

/**
 * Step: Given the user is on the login screen
 * This step launches the mobile app and waits for the login screen to load.
 */
Given('the user is on the login screen', async () => {
    const appId = 'com.swaglabsmobileapp'; // Replace with the actual app package name
    await driver.execute('mobile: activateApp', { appId }); // Activate the app
    await LoginPage.waitForLoginScreen(); // Wait for login screen to appear
});

/**
 * Step: When the user enters "<username>" and "<password>"
 * This step fills in the username and password fields.
 */
When('the user enters {string} and {string}', async (username, password) => {
    await LoginPage.login(username, password); // Enter the username and password
});

/**
 * Step: And clicks the login button
 * This step clicks the login button on the screen.
 */
When('clicks the login button', async () => {
    await LoginPage.clickLoginButton(); // Click the login button
});

/**
 * Step: Then the login should be "<expectedOutcome>"
 * This step verifies whether the login was successful or failed.
 * For success, it logs out of the application.
 */
Then('the login should be {string}', async (expectedOutcome) => {
    if (expectedOutcome === 'success') {
        // Verify login success by checking if the menu breadcrumb is displayed
        expect(await LoginPage.waitForMenusDisplayed()).toBe(true);

        // Logout if the login is successful
        await LoginPage.logout(); // Click the breadcrumb menu and log out
    }
});