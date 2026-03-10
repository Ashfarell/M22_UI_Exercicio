const { defineConfig } = require("cypress");

module.exports = defineConfig({

  reporter: "mochawesome",
  reporterOptions: {
    reportDir: "cypress/reports",
    overwrite: false,
    html: true,
    json: true
  },

  e2e: {
    baseUrl: "http://lojaebac.ebaconline.art.br",
    viewportWidth: 1280,
    viewportHeight: 720
  }
});