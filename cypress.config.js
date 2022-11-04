const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: false,
  defaultCommandTimeout: 6000,
  pageLoadTimeout: 10000,
  env:{
    url: "https://rahulshettyacademy.com"
    // url: "https://rahulshettyacademy.com/angularpractice/"
  },
  retries: {
    runMode: 1
  },
  projectId: "6jnhcm",
  fixturesFolder: "cypress/fixtures",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/integration/examples/*.js'
  },
});
