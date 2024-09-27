const { After } = require('@wdio/cucumber-framework');

After(async () => {
    await driver.reset();
});
