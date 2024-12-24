class ResetPasswordPage {

    fillUserEmail(username) {
        return cy.get('input[type="text"]').type(username);
    }

    isEmailFieldVisible() {
        return cy.get('input[type="text"]').should('be.visible');
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

    clickSendResetLink() {
        return cy.contains('Send Reset Link').click();
    }

    isErrorMessageDisplayed(errorMessage) {
        return cy.get('div[class="MuiAlert-message  css-1xsto0d"]').should('be.visible').contains(errorMessage);
    }

    clickLoginButton() {
        return cy.contains('Login').click();
    }
    clickRegisterButton() {
        return cy.contains('Register').click();
    }

    isRegistrationPagevisible() {
        return cy.get('h1[class="MuiTypography-root MuiTypography-h5  css-1bsjnwy"]').should('be.visible').contains("Profile");
    }
}

export default new ResetPasswordPage();