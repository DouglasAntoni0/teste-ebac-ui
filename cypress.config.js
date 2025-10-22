const { defineConfig } = require("cypress");

module.exports = defineConfig({
  
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'Relatório de Testes - EBAC UI',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },

  projectId: 'dhb3y3', 
  
  e2e: {
    setupNodeEvents(on, config) {
 
      require('cypress-mochawesome-reporter/plugin')(on);
    },

    baseUrl: 'http://lojaebac.ebaconline.art.br/',
    video: true,
  },
});