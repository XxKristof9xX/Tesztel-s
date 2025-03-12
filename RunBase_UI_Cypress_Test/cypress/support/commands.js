const loginAs = (username, password) => {
    cy.visit('/login');
    cy.get(`#username`).type(username);
    cy.get(`#password`).type(password);
    cy.get(`.btn`).click();
  };

