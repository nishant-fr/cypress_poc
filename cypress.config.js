const { defineConfig } = require('cypress');
const cucumber = require('cypress-cucumber-preprocessor').default;
const mochawesome = require('cypress-mochawesome-reporter/plugin');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber());
      mochawesome(on);
      return config;
    },
    specPattern: "cypress/e2e/Features/*.feature",
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      reportDir: 'cypress/reports',      
      overwrite: false,                  
      html: true,                        
      json: true,                        
      charts: true,                      
      reportPageTitle: 'Test Report',    
      embeddedScreenshots: true,         
      inlineAssets: true,                
      reportFilename: 'MyAppTestReport'  
    }
  },
});
