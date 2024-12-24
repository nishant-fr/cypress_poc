class RegisteredUserPage {

    fillFirstName(firstName) {
        return cy.contains('label', 'First Name').parent().find('input').clear().type(firstName);
    }

    fillLastName(lastName) {
        return cy.contains('label', 'Last Name').parent().find('input').clear().type(lastName);
    }

    fillEmailId(email) {
        return cy.contains('label', 'Email').parent().find('input').clear().type(email);
    }

    fillPhoneNumber(phoneNo) {
        return cy.contains('label', 'Phone').parent().find('input').clear().type(phoneNo);
    }
    fillSSNNumber(ssnNo) {
        return cy.contains('label', 'Social Security ID').parent().find('input').clear().type(ssnNo);
    }
    selectBloodType(bloodType) {
        return cy.contains('label', 'Blood Type').parent().find('select').select(bloodType);
    }
    selectSex(sex) {
        return cy.contains('label', 'Sex').parent().find('select').select(sex);
    }
    fillDob(dob) {
        return cy.get('input[placeholder="MM/DD/YYYY"]').clear().type(dob);
    }
    filPhysicianFirstName(physicianFirstName) {
        return cy.contains('label', 'Usual Physician First Name').parent().find('input').clear().type(physicianFirstName);
    }

    filPhysicianLastName(physicianLastName) {
        return cy.contains('label', 'Usual Physician Last Name').parent().find('input').clear().type(physicianLastName);
    }
    selectPhysicianTitle(physicianTitle) {
        return cy.contains('label', 'Physician Title').parent().find('select').select(physicianTitle);
    }
    fillCareSiteName(careSiteName) {
        return cy.contains('label', 'Usual Care Site Name').parent().find('input').clear().type(careSiteName);
    }

    fillCareSiteAddress(careSiteAddress) {
        return cy.contains('label', 'Usual Care Site Address').parent().find('input').clear().type(careSiteAddress);
    }

    clickByButtonName(buttonName) {
        return cy.contains(buttonName).click();
    }

    isMessageVisible(message) {
        return cy.get('div[class="MuiAlert-message  css-1xsto0d"]').should('be.visible').contains(message);
    }
}

export default new RegisteredUserPage();