class LoginPage {
  // Locators for elements on the login page
  get usernameInput() {
    return $('//android.widget.EditText[@content-desc="test-Username"]');
  }

  get passwordInput() {
    return $('//android.widget.EditText[@content-desc="test-Password"]');
  }

  get loginButton() {
    return $('//android.view.ViewGroup[@content-desc="test-LOGIN"]');
  }

  get menuBreadcrumb() {
    return $("~test-Menu");
  }

  get logoutButton() {
    return $("~test-LOGOUT");
  }

  get productsText() {
    return $('//android.view.ViewGroup[@content-desc="test-Cart drop zone"]');
  }

  get errorMessage() {
    return $(
      '//android.view.ViewGroup[@content-desc="test-Error message"]/android.widget.TextView'
    );
  }

  get toggleIcon() {
    return $('//android.view.ViewGroup[@content-desc="test-Toggle"]');
  }

  get productPrices() {
    return $$('//android.widget.TextView[@content-desc="test-Price"]');
  }

  /**
   * Wait until the login screen is loaded
   * @throws Will throw an error if login screen doesn't load in time
   */
  async waitForLoginScreen() {
    await browser.waitUntil(
      async () => await this.usernameInput.isDisplayed(),
      {
        timeout: 20000, // Wait up to 20 seconds
        timeoutMsg: "Login screen did not load in time",
      }
    );
  }

  async waitForMenusDisplayed() {
    return await browser.waitUntil(
      async () => await this.menuBreadcrumb.isDisplayed(),
      {
        timeout: 60000,
        timeoutMsg: "Breadcrumb Menu icon did not load in time",
      }
    );
  }

  /**
   * Perform login action with provided username and password
   * @param {string} username - User's username
   * @param {string} password - User's password
   */
  async login(username, password) {
    await this.usernameInput.setValue(username); // Enter the username
    await this.passwordInput.setValue(password); // Enter the password
    await this.clickLoginButton(); // Click login button
  }

  /**
   * Click the login button
   */
  async clickLoginButton() {
    await this.loginButton.click();
  }

  /**
   * Click the menu breadcrumb (hamburger) icon to open the menu
   */
  async clickMenuBreadcrumb() {
    await this.menuBreadcrumb.click();
  }

  /**
   * Click the logout button from the menu
   */
  async clickLogoutButton() {
    await this.logoutButton.click();
  }

  /**
   * Perform logout action: First click the breadcrumb icon, then click the logout button
   */
  async logout() {
    await this.clickMenuBreadcrumb(); // Step 1: Click menu/breadcrumb icon
    await this.clickLogoutButton(); // Step 2: Click logout button
  }

  /**
   * Retrieve the error message text after a failed login attempt
   * @returns {Promise<string>} The error message text
   */
  async getErrorMessage() {
    return await this.errorMessage.getText();
  }

  /**
   * Check if the products page is displayed after a successful login
   * @returns {Promise<boolean>} True if products text is visible, else false
   */
  async isProductsTextDisplayed() {
    return await this.productsText.isDisplayed();
  }

  /**
   * Check if the error message is displayed after a failed login
   * @returns {Promise<boolean>} True if error message is visible, else false
   */
  async isErrorMessageDisplayed() {
    return await this.errorMessage.isDisplayed();
  }

  async findMinPriceProduct() {
    await this.toggleIcon.click();
    let products = [];

    // Collect the prices from the MobileElements
    for (let p of await this.productPrices) {
      let priceText = await p.getText();
      console.log("Price Text: " + priceText);

      // Remove the dollar sign and convert to a number
      let priceValue = parseFloat(priceText.replace("$", "").trim());
      products.push(priceValue);
    }

    console.log(products);

    // Find the minimum price manually
    let minPrice = products[0]; // Start with the first price
    let minIndex = 0; // To keep track of the index of the minimum price

    for (let index = 1; index < products.length; index++) {
      if (products[index] < minPrice) {
        minPrice = products[index]; // Update minPrice if a smaller price is found
        minIndex = index; // Update the index of the new minimum price
      }
    }

    console.log("Min Price = $" + minPrice);

    // Assuming there's a corresponding 'Add to Cart' button or similar action
    let minPriceElement = await this.productPrices[minIndex];
    await minPriceElement.click(); // Replace with your method to click the add button
  }
}

export default new LoginPage();
