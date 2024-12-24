class LoginPage {
    visitLoginPage() {
        cy.visit('http://localhost:8090');
    }

    fillUsername(username) {
        return cy.get('input[id=":r0:"]').type(username);
    }

    fillPassword(password) {
        return cy.get('input[id=":r1:"]').type(password);
    }

    submit() {
        return cy.get('button[type="submit"]').click();
    }

    getErrorMessage(errorMessage) {
        return cy.get('div[class="MuiAlert-message  css-1xsto0d"]').should("have.text", errorMessage);
    }

    isHomePagevisible() {
        return cy.get('h1[class="MuiTypography-root MuiTypography-h5  css-1bsjnwy"]').should('be.visible').contains("Profile");
    }

    isLoginPageVisible() {
        return cy.get('button[type="submit"]').should('be.visible');
    }

    isPasswordFieldVisible() {
        return cy.get('input[id=":r1:"]').should('be.visible');
    }

    isUserNameFieldVisible() {
        return cy.get('input[id=":r0:"]').should('be.visible');
    }

    clickRegisterButton() {
        return cy.contains('Register').click();
    }

    isRegisterPagevisible() {
        return cy.get('h1[class="MuiTypography-root MuiTypography-h5  css-1bsjnwy"]').should('be.visible').contains("Register");
    }

    clickForgotPasswordButton() {
        return cy.contains('Forgot Password?').click();
    }

    isForgotPassworPagevisible() {
        return cy.get('h1[class="MuiTypography-root MuiTypography-h5  css-1bsjnwy"]').should('be.visible').contains("Reset Password");
    }

    isRegisterFormvisible() {
        return cy.get('form[class="MuiBox-root css-178yklu"]').should('be.visible');
    }

}

export default new LoginPage();