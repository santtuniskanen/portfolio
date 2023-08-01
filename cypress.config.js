const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      console.log(config)

      config.baseUrl = 'http://localhost:3000'
    },
  },
});
