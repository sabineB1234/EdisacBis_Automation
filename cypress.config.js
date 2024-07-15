const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default


module.exports = defineConfig({
 pageLoadTimeout: 60000,
 reporter: 'cypress-mochawesome-reporter',
 reporterOptions: {
   charts: true,
   reportPageTitle: 'EdisacBis / SlashUp',
   embeddedScreenshots: true,
   inlineAssets: true,
   saveAllAttempts: false,
   overwrite: false,
   html: true,
   json: false
 },
 
 e2e: {
   setupNodeEvents(on, config) {
     // implement node event listeners here
     screenshotOnRunFailure = true
     require('cypress-mochawesome-reporter/plugin')(on),
       // implement node event listeners here
       on('file:preprocessor', cucumber())
   
  },
  specPattern: "cypress/e2e/features/**/*.feature",
  excludeSpecPattern: '**/*.{js,ts}',
},
});
