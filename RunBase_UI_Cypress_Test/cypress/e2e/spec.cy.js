describe('Versenyek megjelennek a versenyek oldalon', () => {
  it('passes', () => {
    cy.visit('https://www.runbase.hu/')
    cy.get('[href="/versenyek"]').click();
    cy.get('.card').should('exist');
  })

});

describe('Eredmények oldalon versenyek listázhatók', () => {
  it('passes', () => {
    cy.visit('https://www.runbase.hu/')
    cy.get('[href="/eredmenyek"]').click();
    cy.get('#selectedCompetition').should('not.be.empty');
  })
});

describe('Eredmények oldalon kiválasztott eredmények megjelennek lista kiválasztása után', () => {
  it('passes', () => {
    cy.visit('https://www.runbase.hu/')
    cy.get('[href="/eredmenyek"]').click();
    cy.get('#selectedCompetition').select("27. ALDI Női Futógála");
    cy.get('.table > :nth-child(2) > :nth-child(1)').should('have.text', '5');
  })
})

