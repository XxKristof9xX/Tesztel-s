Cypress.Commands.add('loginAs', (username, password) => {
  cy.get('.ms-auto > .nav-item').click();
  cy.get('#input-0').type(username);
  cy.get('#input-2').type(password);
<<<<<<< HEAD
  cy.get('.bg-primary > .v-btn__content').contains('Bejelentkezés').click();
=======
  cy.get('.bg-primary').click();
>>>>>>> 10f9b4e457f823a8c3ebaed999844bf37926e7b9
});
