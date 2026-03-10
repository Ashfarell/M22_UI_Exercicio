const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://lojaebac.ebaconline.art.br",
    pageLoadTimeout: 120000,
    viewportWidth: 1280,
    viewportHeight: 720
  }
});