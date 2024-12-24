class UserRegistrationPage {

    fillFirstName(firstName) {
        return cy.get('input[id=":r2:"]').type(firstName);
    }

    fillLastName(lastName) {
        return cy.get('input[id=":r3:"]').type(lastName);
    }
    fillPhoneNumber(phoneNo) {
        return cy.get('input[id=":r4:"]').type(phoneNo);
    }
    fillSSNNumber(ssnNo) {
        return cy.get('input[id=":r5:"]').type(ssnNo);
    }

    clickAndEnterBloodType(bloodType) {
        cy.get('div[aria-haspopup="listbox"]').eq(0).click();
        return cy.get('li').contains(bloodType).click();
    }
    clickAndEnterSex(sex) {
        cy.get('div[aria-labelledby="sex-label"]').eq(0).click();
        return cy.get('li').contains(sex).click();
    }

    fillDob(dob) {
        return cy.get('input[placeholder="MM/DD/YYYY"]').type(dob);
    }

    filPhysicianFirstName(physicianFirstName) {
        return cy.contains('label', 'Physician First Name').parent().find('input').type(physicianFirstName);
    }

    filPhysicianLastName(physicianLastName) {
        return cy.contains('label', 'Physician Last Name').parent().find('input').type(physicianLastName);
    }

    clickAndEnterPhysicianTitle(physicianTitle) {
        cy.get('div[aria-labelledby="physician-title-label"]').eq(0).click();
        return cy.get('li').contains(physicianTitle).click();
    }

    fillCareSiteName(careSiteName) {
        return cy.contains('label', 'Care Site Name').parent().find('input').type(careSiteName);
    }

    fillCareSiteAddress(careSiteAddress) {
        return cy.contains('label', 'Care Site Address').parent().find('input').type(careSiteAddress);
    }

    fillEmailId(email) {
        return cy.contains('label', 'Email').parent().find('input').type(email);
    }

    fillPassword(password) {
        return cy.contains('label', 'Password').parent().find('input').type(password);
    }

    clickRegisterButton() {
        return cy.get('button[type="submit"]').click();
    }

    isRedirectionToLoginPaseSuccessful() {
        return cy.url().should('include', '/login');
    }

    fillLoginPageEmailId(email) {
        return cy.contains('label', 'Email').parent().find('input').should('exist').should('be.visible').type(email, { force: true });
    }

    fillLoginPagePassword(password) {
        return cy.contains('label', 'Password').parent().find('input').should('exist').should('be.visible').type(password);
    }
    clickSubmit() {
        return cy.get('button[type="submit"]').click();
    }


    isUserProfileVisible() {
        return cy.contains('h1', 'Profile').should('exist').should('be.visible');;
    }

    submit() {
        return cy.get('button[type="submit"]').click();
    }

    isConfirmationMessageDisplayed(confirmationMessage) {
        return cy.get('div[class="MuiAlert-message  css-1xsto0d"]').should('be.visible').contains(confirmationMessage);
    }

    isHomePagevisible() {
        return cy.get('h1[class="MuiTypography-root MuiTypography-h5  css-1bsjnwy"]').should('be.visible').contains("Profile");
    }
}

export default new UserRegistrationPage();