const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: "gd4xxp",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  reporter: 'mochawesome',
  reporterOptions: {
    overwrite: false,
    html: false,
    json: true,
  },
})