Cypress.Commands.add('loginAs', (username, password) => {
  cy.get('.ms-auto > .nav-item').click();
  cy.get('#username').type(username);
  cy.get('#password').type(password);
  cy.get('.btn').click();
});
