import { Given, When, Then, And, DataTable } from 'cypress-cucumber-preprocessor/steps';
import { faker } from '@faker-js/faker';
import RegisteredUserPage from '../PageObjects/RegisteredUserPage';
const scenarioContext = require('../../support/ScenarioContext');

When(`the user enters the following values to modify the profile`, (tableValues) => {
   
    cy.log("Entering values in the user registration form");

    tableValues.hashes().forEach(element => {

        if (element.firstName == "random") {
            RegisteredUserPage.fillFirstName(faker.person.firstName());
        }
        else RegisteredUserPage.fillFirstName(element.firstName);

        if (element.lastName == "random") {
            RegisteredUserPage.fillLastName(faker.person.lastName());
        }
        else RegisteredUserPage.fillLastName(element.lastName);

        RegisteredUserPage.fillEmailId(element.emailId);
        RegisteredUserPage.fillPhoneNumber(element.phoneNo);
        RegisteredUserPage.fillSSNNumber(element.ssnNo);

        RegisteredUserPage.selectBloodType(element.bloodType);
        RegisteredUserPage.selectSex(element.sex);

        RegisteredUserPage.fillDob(element.dob);

        RegisteredUserPage.filPhysicianFirstName(faker.person.firstName());
        RegisteredUserPage.filPhysicianLastName(faker.person.lastName());

        RegisteredUserPage.selectPhysicianTitle(element.physicianTitle);

        RegisteredUserPage.fillCareSiteName(faker.company.buzzAdjective());
        RegisteredUserPage.fillCareSiteAddress(element.careSiteAddress);

    })

});

When(`the user clicks the {string} button in the user profile page`, (buttonName) => {
    RegisteredUserPage.clickByButtonName(buttonName);
});

Then(`the user should see a message {string}`, (message) => {
    cy.log("Verifying profile update message messaage");
    RegisteredUserPage.isMessageVisible(message);
});


When(`the user modifies the first name field to {string}`, (firstName) => {
    RegisteredUserPage.fillFirstName(firstName);
});

When(`the user modifies the last name field to {string}`, (lastName) => {
    RegisteredUserPage.fillLastName(lastName);
});

When(`the user modifies the email field to {string}`, (email) => {
    RegisteredUserPage.fillEmailId(email);
});

When(`the user modifies the phone number field to {string}`, (phone) => {
    RegisteredUserPage.fillPhoneNumber(phone);
});

When(`the user modifies the first name of physician field to {string}`, (firstName) => {
    RegisteredUserPage.filPhysicianFirstName(firstName);
});

When(`the user modifies the last name of physician field to {string}`, (lastName) => {
    RegisteredUserPage.filPhysicianLastName(lastName);
});

When(`the user modifies the usual care site name field to {string}`, (careSiteName) => {
    RegisteredUserPage.fillCareSiteName(careSiteName);
});

When(`the user modifies the usual care site address field to {string}`, (careSiteAddress) => {
    RegisteredUserPage.fillCareSiteAddress(careSiteAddress);
});
