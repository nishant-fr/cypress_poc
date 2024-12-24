import { Given, When, Then, And, DataTable } from 'cypress-cucumber-preprocessor/steps';
import { faker } from '@faker-js/faker';
import UserRegistrationPage from '../PageObjects/UserRegistrationPage';
const scenarioContext = require('../../support/ScenarioContext');

When(`the user enters the following values to register`, (tableValues) => {

    cy.log("Entering values in the user registration form");

    tableValues.hashes().forEach(element => {


        if (element.firstName == "random") {
            UserRegistrationPage.fillFirstName(faker.person.firstName());
        }
        else UserRegistrationPage.fillFirstName(element.firstName);

        if (element.lastName == "random") {
            UserRegistrationPage.fillLastName(faker.person.lastName());
        }
        else UserRegistrationPage.fillLastName(element.lastName);

        UserRegistrationPage.fillPhoneNumber(element.phoneNo);
        UserRegistrationPage.fillSSNNumber(element.ssnNo);
        UserRegistrationPage.clickAndEnterBloodType(element.bloodType);
        UserRegistrationPage.clickAndEnterSex(element.sex);
        UserRegistrationPage.fillDob(element.dob);



        if (element.physicianFirstName == "random") {
            UserRegistrationPage.filPhysicianFirstName(faker.person.firstName());
        }
        else UserRegistrationPage.filPhysicianFirstName(element.physicianFirstName);

        if (element.physicianLastName == "random") {
            UserRegistrationPage.filPhysicianLastName(faker.person.firstName());
        }
        else UserRegistrationPage.filPhysicianLastName(element.physicianLastName);

        UserRegistrationPage.clickAndEnterPhysicianTitle(element.physicianTitle);


        if (element.careSiteName == "random") {
            UserRegistrationPage.fillCareSiteName(faker.company.buzzAdjective());
        }
        else UserRegistrationPage.fillCareSiteName(element.careSiteName);

        if (element.careSiteAddress == "random") {
            UserRegistrationPage.fillCareSiteAddress(faker.company.buzzAdjective());
        }
        else UserRegistrationPage.fillCareSiteAddress(element.careSiteAddress);

        if (element.emailId == "random") {
            const email = faker.internet.email();
            UserRegistrationPage.fillEmailId(email);
            scenarioContext.setValue('userID', email);
        }
        else UserRegistrationPage.fillEmailId(element.emailId);

        if (element.password == "random") {
            const password = faker.internet.password();
            UserRegistrationPage.fillPassword(password);
            scenarioContext.setValue('userPassword', password);
        }
        else UserRegistrationPage.fillPassword(element.password);

    });
});

When(`the user clicks the {string} button under registration page`, (buttonName) => {
    cy.log("Clicking on Register button in registration page");
    UserRegistrationPage.clickRegisterButton();
});


Then(`upon successfull registration the user is redirected to the login page`, () => {
    cy.log("Verifying that the user is redireced to the login page");
    UserRegistrationPage.isRedirectionToLoginPaseSuccessful();
});

Then(`newly registered user is able to login successfully to the application`, () => {
    cy.log("Verifying that the new user is able to connect");
    const userID = scenarioContext.getValue('userID');
    cy.log('User id retrieved from context:', userID);
    const userPassword = scenarioContext.getValue('userPassword');
    cy.log('User password retrieved from context:', userPassword);

    UserRegistrationPage.fillLoginPageEmailId(userID);
    UserRegistrationPage.fillLoginPagePassword(userPassword);
    cy.log("Clicking on Login button");
    UserRegistrationPage.clickSubmit();

    cy.log("Verifying successfull login of the registered user");
    UserRegistrationPage.isUserProfileVisible();
});


