const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    // baseUrl: 'https://www.globalsqa.com/', // Bazowy URL dla testów
    baseUrl: 'https://automationteststore.com/', // Bazowy URL dla testów
    // baseUrl: 'https://www.automationexercise.com/', // Bazowy URL dla testów
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}', // Ścieżka do plików testowych
    supportFile: 'cypress/support/e2e.ts', // Plik z funkcjami wspierającymi testy
    viewportWidth: 1280, // Szerokość okna przeglądarki
    viewportHeight: 720, // Wysokość okna przeglądarki
  },
});
