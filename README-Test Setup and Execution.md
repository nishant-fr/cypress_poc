
# Cypress & Cucumber Setup Guide

This guide provides step-by-step instructions to set up Cypress with Cucumber and configure the folder structure for E2E testing.

## Prerequisites

Ensure the following are installed:

- **Docker Desktop**
- **Visual Studio Code (VSCode)**

## Steps

### 1. Install VSCode Plugins

Install the following VSCode plugins for improved development support:

- **Cucumber**
- **Cucumber (Gherkin) Full Support**
- **Cucumber Step Definitions Generator**
- **Prettier Code Formatter**

### 2. Install Required Packages

Install Cypress, Cucumber, Faker (for generating fake argument values), Mochawesome Reporter (to generate overall html test execution report), and Newman (to run Postman API tests from the Postman collection) via npm:

```bash
npm install cypress
npm install cypress-cucumber-preprocessor
npm install --save-dev @faker-js/faker
npm install --save-dev newman
npm install --save-dev cypress-mochawesome-reporter
npx cypress open
```

### 3. Project Structure

Set up the following folder structure for E2E tests:

```
e2e
│
├── Features
│   ├── LoginPage.feature
│   ├── RegisteredUserPage.feature
│   ├── ResetPasswordPage.feature
│   └── UserRegistrationPage.feature
│
├── PageObjects
│   ├── LoginPage.js
│   ├── RegisteredUserPage.js
│   ├── ResetPasswordPage.js
│   └── UserRegistrationPage.js
│
└── StepDefinitions
    ├── LoginPageStep.js
    ├── RegisteredUserPageStep.js
    ├── ResetPasswordPageStep.js
    └── UserRegistrationPageStep.js
```

The **Features** folder can contains 4 different features which contain scenarios to each page in the application. The **PageObjects** contains declaration of WebElements and their methods. The The **StepDefinitions** folder contains the corresponding test step implementations where the methods in the page objects are called.

Under **/cypress/manual_test_plan** folder, there is Manual Test Plan excel file which contains 4 sheets. Each Sheet corresponds to a test suite with test scenario title defined in it. I've also added an PDF format as well for the Manual Test Plan. A manual tester can use whichever it suits best to perform manual scenarios.

### 4. Running Tests

Setting up the repository and launching the test app, follow the following command:

```bash
create a folder locally
git clone https://github.com/nishant-fr/embleema-test.git
docker compose up --build
```

To run the API tests, open a terminal in VS Code and execute the following command:

```bash
npm run test:api
```

To run the end-to-end Cypress tests, use the following command:

```bash
npm run test:cypress
```

### 5. Test Execution Report for end to end test

Apart from the overall test execution result, an HTML report is generated in the **/e2e/report** folder which shows overall test execution details