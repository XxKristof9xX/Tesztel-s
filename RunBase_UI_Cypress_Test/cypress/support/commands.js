Cypress.Commands.add('loginAs', (username, password) => {
  cy.get('.ms-auto > .nav-item').click();
  cy.get('#input-0').type(username);
  cy.get('#input-2').type(password);
  cy.get('.bg-primary').click();
});
