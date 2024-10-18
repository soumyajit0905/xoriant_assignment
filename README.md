# 🌟 Xoriant Assignment - Mobile Automation Framework 🌟

Welcome to the **Xoriant Assignment** repository! This project contains a robust mobile automation testing framework built using **WebdriverIO**, **Appium**, and **Cucumber** with **JavaScript**. The framework is designed to efficiently test the login functionality of an Android application, leveraging the **Page Object Model (POM)** and **Behavior-Driven Development (BDD)** principles.

## 📋 Prerequisites

To get started, ensure you have the following installed on your system:
- **[Node.js](https://nodejs.org/)** (v14 or above)
- **[Java Development Kit (JDK)](https://www.oracle.com/java/technologies/javase-jdk11-downloads.html)** (v8 or above)
- **[Android Studio](https://developer.android.com/studio)**
- **[Appium](http://appium.io/)**

## 🚀 Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone https://github.com/soumyajit0905/xoriant_assignment.git
   cd xoriant_assignment/wdio-appium
   
2.Install dependencies: Ensure that you have npm or yarn installed, then run:
npm install

3.Configure the Android Emulator: Make sure you have an Android emulator set up and running. You can do this through Android Studio’s AVD Manager.

4.Run the tests: Execute the tests using the following command:
npx wdio run wdio.conf.js

This will start Appium, run the test scenarios described in the login.feature file, and generate a report.

🏆 Features
- Login Functionality Tests: Validates the login functionality with various input scenarios (both positive and negative).
- Page Object Model (POM): The project follows POM to maintain clean and reusable code.
- Behavior-Driven Development (BDD) with Cucumber: The test scenarios are written in Gherkin syntax for readability and collaboration.

- 📊 Reporting
The test results are generated using Allure Reports. You can view the report by running:
   npx allure generate allure-results --clean -o allure-report
   npx allure open allure-report

🛠️ Troubleshooting
Emulator Issues: Ensure that your emulator is properly configured and running. If you encounter issues with the emulator, try restarting it or checking the ADB connection.
Appium Errors: Make sure that Appium is correctly installed and configured. You can verify the installation by running appium-doctor.

Thank you for checking out this project! Happy testing! 🎉



