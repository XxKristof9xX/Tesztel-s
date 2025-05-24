Cypress.Commands.add('loginAs', (username, password) => {
  cy.get('.navbar').contains("Bejelentkezés").click();
  cy.get('#input-6').type(username);
  cy.get('#input-8').type(password);
  cy.get('.bg-primary > .v-btn__content').contains('Bejelentkezés').click();
});
