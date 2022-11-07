const { defineConfig } = require("cypress");
const Mochawesome = require("mochawesome");

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

  /*
    - to record test executions via cypress dashboard, login to the cypress dashboard.
    - create a new project, then, a projectId will be displayed. Copy it and paste it here in cypress.config.js
    - after the configurations and settings mentioned, the dashboard is ready to record some test executions.
  */
  projectId: "6jnhcm",
  fixturesFolder: "cypress/fixtures",
  reporter: "mochawesome",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/integration/examples/*.js'
  },
});
