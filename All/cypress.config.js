const { defineConfig } = require("cypress");

module.exports = defineConfig({
  video:true,  //for video taking later
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    testIsolation:false  //for regression testing later
  },
});
