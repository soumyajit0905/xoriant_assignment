import { Given, When, Then } from '@wdio/cucumber-framework';
import LoginPage from '../pageobjects/login.page';


// Step: Given the user is on the login screen
Given('the user is on the login screen', async function () {
    await LoginPage.waitForLoginScreen();
});

// Step: When the user enters "<username>" and "<password>"
When('the user enters {string} and {string}', async function (username, password) {
    await LoginPage.login(username, password);
});

// Step: And clicks the login button
When('clicks the login button', async function () {
    await LoginPage.loginButton.click(); // Assuming this action is needed if you separate the step
});

// Step: Then the login should be "<expectedOutcome>"
Then('the login should be {string}', async function (expectedOutcome) {
    if (expectedOutcome === 'failure') {
        const errorMessage = await LoginPage.getErrorMessage();
        expect(errorMessage).toBeDisplayed(); // Assuming you check for error message when login fails
    } else {
        const errorMessage = await LoginPage.getErrorMessage();
        expect(errorMessage).not.toBeDisplayed(); // Assuming you check that there's no error message on successful login
    }
});
