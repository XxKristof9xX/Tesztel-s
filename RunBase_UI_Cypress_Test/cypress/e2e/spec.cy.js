describe('Versenyek megjelennek a versenyek oldalon', () => {
  it('passes', () => {
    cy.visit('/')
    cy.get('[href="/versenyek"]').click();
    cy.get('.card').should('exist');
  })

});

describe('Eredmények oldalon versenyek listázhatók', () => {
  it('passes', () => {
    cy.visit('/')
    cy.get('[href="/eredmenyek"]').click();
    cy.get('#selectedCompetition').should('not.be.empty');
  })
});

describe('Eredmények oldalon kiválasztott eredmények megjelennek lista kiválasztása után', () => {
  it('passes', () => {
    cy.visit('/')
    cy.get('[href="/eredmenyek"]').click();
    cy.get('#selectedCompetition').select("27. ALDI Női Futógála");
    cy.get('.table > :nth-child(2) > :nth-child(1)').should('have.text', '5');
  })
});

describe('Bejelentkezésellenőrzése ', () => {
  it('Logs in using cy.loginAs', () => {
    const username = 'Teszt Felhasználó3';
    cy.visit('/');
    cy.loginAs(username, 'TitkosJelszo123');
    cy.get('.navbar').contains('Profil').click();
    cy.get('.card-title').contains(username);
  });
});

describe('Kijelentkezés ', () => {
  it('Logs in using cy.loginAs', () => {
    const username = 'Teszt Felhasználó3';
    cy.visit('/');
    cy.loginAs(username, 'TitkosJelszo123');
    cy.get('.navbar').contains('Profil').click();
    cy.get('.card-title').contains(username);
    cy.get('.container').contains('Kijelentkezés').click();
    cy.get('body').should('not.contain', 'Profil');
  });
});

describe('Admin profilon Admin Panel elérhetősége ', () => {
  it('Logs in using cy.loginAs', () => {
    const username = 'Teszt Felhasználó';
    cy.visit('/');
    cy.loginAs(username, 'TitkosJelszo123');
    cy.get('.navbar').contains('Profil').click();
    cy.get('.card-body').contains("admin");
    cy.get('.navbar').contains('Admin Panel').should('exist');
  });
});




