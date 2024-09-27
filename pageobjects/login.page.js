class LoginPage {
    get usernameInput() { return $('//android.widget.EditText[@content-desc="test-Username"]'); }
    get passwordInput() { return $('//android.widget.EditText[@content-desc="test-Password"]'); }
    get loginButton() { return $('//android.widget.TextView[@content-desc="test-LOGIN"]'); }
    get errorMessage() { return $('//android.view.ViewGroup[@content-desc="test-Error message"]/android.widget.TextView'); }

    async waitForLoginScreen() {
        await browser.waitUntil(async () => (await this.usernameInput.isDisplayed()), {
            timeout: 20000,
            timeoutMsg: 'Login screen did not load in time'
        });
    }

    async login(username, password) {
        await this.usernameInput.setValue(username);
        await this.passwordInput.setValue(password);
        await this.loginButton.click();
    }

    async getErrorMessage() {
        return await this.errorMessage.getText();
    }
}

module.exports = new LoginPage();
