const scenarioContext = require('../../support/ScenarioContext');

before(() => {
    cy.log("Starting Test suite");
    cy.clearCookies();
})

beforeEach(() => {
    cy.log("Starting Test case");
    scenarioContext.clearContext();
})

afterEachbefore(() => {
    cy.log("Test case ends here");
    cy.screenshot();
    scenarioContext.clearContext();
})

after(() => {
    cy.log("Ending Test suite");
})

