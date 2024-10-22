import path from 'path';

export const config = {
    runner: 'local',
    port: 4723,
    specs: [
        './features/**/*.feature'
    ],
    exclude: [],
    maxInstances: 10,
    capabilities: [{
        platformName: 'Android',
        'appium:deviceName': 'emulator-5554',
        'appium:platformVersion': '11.0',
        'appium:automationName': 'UiAutomator2',
        'appium:app': path.join(process.cwd(), 'app/android/Android.SauceLabs.Mobile.Sample.app.2.7.1.apk'),
        'appium:noReset': true,
        'appium:newCommandTimeout': 240,
        'appium:uiautomator2ServerLaunchTimeout': 60000
    }],
    logLevel: 'info',
    bail: 0,
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: ['appium'],
    framework: 'cucumber',
    reporters: [
        'spec',
        ['allure', {
            outputDir: 'allure-results',
            disableWebdriverStepsReporting: true,
            disableWebdriverScreenshotsReporting: false,
        }],
    ],
    cucumberOpts: {
        require: ['./step_definitions/*.js'],
        backtrace: false,
        requireModule: [],
        dryRun: false,
        failFast: false,
        format: ['pretty'],
        snippets: true,
        source: true,
        profile: [],
        strict: false,
        tagExpression: '',
        timeout: 60000,
        ignoreUndefinedDefinitions: false
    },
};