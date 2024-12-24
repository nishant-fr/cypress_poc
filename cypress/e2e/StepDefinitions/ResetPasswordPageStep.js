import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

import ResetPasswordPage from '../PageObjects/ResetPasswordPage';


Then(`a confirmation message {string} should be displayed`, (confirmationMessage) => {
    cy.log("Verifying reset link sent confirmation message");
    ResetPasswordPage.isConfirmationMessageDisplayed(confirmationMessage);
});

When(`the user enters a valid email address`, () => {
    cy.log("Entering a valid email address");
    ResetPasswordPage.fillUserEmail('jha_nishant@outlook.fr');
});

When(`the user enters an unregistered email address`, () => {
    cy.log("Entering an unregistered email address");
    ResetPasswordPage.fillUserEmail('randomt@outlook.fr');
});

When(`the user enters an invalid email address`, () => {
    cy.log("Entering an invalid email address");
    ResetPasswordPage.fillUserEmail('randomt@look.frsvsd');
});

When(`clicks the {string} button in reset password page`, (buttonName) => {
    cy.log("Clicking on send reset link button in reset password page");
    ResetPasswordPage.clickSendResetLink();
});

Then(`the user should see an error message {string}`, (errorMessage) => {
    cy.log("Verifying error messaage");
    ResetPasswordPage.isErrorMessageDisplayed(errorMessage);
});

When(`the user leaves the email field empty under reset password page`, () => {
    cy.log("Entering no value in the email id field under reset password page");
    ResetPasswordPage.isEmailFieldVisible();
});

When(`the user clicks the LOGIN link at the top under reset password page`, () => {
    cy.log("Clicking on LOGIN link at the top under reset password page");
    ResetPasswordPage.clickLoginButton();
});

When(`the user clicks the REGISTER link at the top under reset password page`, () => {
    cy.log("Clicking on LOGIN link at the top under reset password page");
    ResetPasswordPage.clickRegisterButton();
});

Then(`the user should be redirected to the login page`, () => {
    cy.log("Verifying if login page is visible");
    ResetPasswordPage.isEmailFieldVisible();
});

Then(`the user should be redirected to the registration page`, () => {
    cy.log("Verifying that registration page is properly displayed");
    ResetPasswordPage.isRegistrationPagevisible();
});


