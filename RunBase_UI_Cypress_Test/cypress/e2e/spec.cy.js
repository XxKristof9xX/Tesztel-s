describe('Versenyek megjelennek a versenyek oldalon', () => {
  it('passes', () => {
    cy.visit('https://www.runbase.hu/')
    cy.get('[href="/versenyek"]').click();
    cy.get('.card').should('exist');
  })

})



