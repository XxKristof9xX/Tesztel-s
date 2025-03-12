const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.runbase.hu/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});