import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import LoginPage from '../PageObjects/LoginPage';

Given(`the user is on the login page`, () => {
    cy.log("Connecting to the test url");
    LoginPage.visitLoginPage();
})

When(`the user enters a valid email and password`, () => {
    cy.log("Entering a valid email id and password");
    LoginPage.fillUsername('app@testing.com');
    LoginPage.fillPassword('apptesting');
})

When(`clicks the {string} button`, (buttonName) => {
    cy.log("Clicking on Login button");
    LoginPage.submit();
});

Then(`the user should be redirected to the homepage`, () => {
    LoginPage.isHomePagevisible();
});

When(`the user enters an invalid email or password`, () => {
    cy.log("Entering an invalid email id and password");
    LoginPage.fillUsername('app@test.com');
    LoginPage.fillPassword('appte');
});

Then(`the user should see an error message {string}`, (errorMessage) => {
    cy.log("Verifying error message {} is displayed", errorMessage);
    LoginPage.getErrorMessage(errorMessage);
});

Then(`the user should remain on the login page`, () => {
    cy.log("Verifying login page remains displayed");
    LoginPage.isLoginPageVisible();
});

When(`the user leaves the email field empty`, () => {
    cy.log("Entering no value in the email id field");
    LoginPage.isUserNameFieldVisible();
});

When(`enters a password`, () => {
    cy.log("Entering valid password value");
    LoginPage.fillPassword('apptest');
});

Then(`the user should see a validation message {string}`, (errorMessage) => {
    cy.log("Verifying empty error message {} is displayed", errorMessage);
    LoginPage.getErrorMessage(errorMessage);
});

When(`the user enters an email`, () => {
    cy.log("Entering valid id value");
    LoginPage.fillUsername('app@test.com');
});

When(`leaves the password field empty`, () => {
    cy.log("Entering no value in the password field");
    LoginPage.isPasswordFieldVisible();
});

When(`the user clicks the {string} button`, (buttonName) => {
    cy.log("Clicking on Register button");
    LoginPage.clickRegisterButton();
});

Then(`the user should be redirected to the registration page`, () => {
    cy.log("Verifying that registration page is properly displayed");
    LoginPage.isRegisterPagevisible();
});

When(`the user clicks the {string} link`, (linkName) => {
    cy.log("Clicking on Forgot passworrd link");
    LoginPage.clickForgotPasswordButton();
});

Then(`the user should be redirected to the forgot password page`, () => {
    cy.log("Verifying that forgot password page is properly displayed");
    LoginPage.isForgotPassworPagevisible();
});

Then(`the registration form should be displayed`, () => {
    cy.log("Verifying that registration form is properly displayed");
    LoginPage.isRegisterFormvisible();
});
