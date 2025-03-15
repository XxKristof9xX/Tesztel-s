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

describe('Bejelentkezés ellenőrzése ', () => {
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
    cy.get('.navbar').contains('Kijelentkezés').click();
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
    cy.get('.navbar').contains('Kijelentkezés').click();
  });
});

describe('Admin profillal Admin Panel elérhetősége ', () => {
  it('Logs in using cy.loginAs', () => {
    const username = 'Teszt Felhasználó';
    cy.visit('/');
    cy.loginAs(username, 'TitkosJelszo123');
    cy.get('.navbar').contains('Profil').click();
    cy.get('.card-body').contains("admin");
    cy.get('.navbar').contains('Admin Panel').click();
    cy.get('.v-container').contains('Felhasználók kezelése').should('exist');
    cy.get('.v-container').contains('Versenyzők kezelése').should('exist');
    cy.get('.navbar').contains('Kijelentkezés').click();
  });
});

describe('Szervező profillal Admin Panel elérhetősége, de csak a versenyzők adatai érhetők el ', () => {
  it('Logs in using cy.loginAs', () => {
    const username = 'TestOrganizer';
    cy.visit('/');
    cy.loginAs(username, 's');
    cy.get('.navbar').contains('Profil').click();
    cy.get('.card-body').contains("organizer");
    cy.get('.navbar').contains('Admin Panel').click();
    cy.get('.v-container').contains('Versenyzők kezelése').should('exist');
    cy.get('.v-container').contains('Felhasználók kezelése').should('not.exist');
    cy.get('.navbar').contains('Kijelentkezés').click();
  });
});

describe('Regisztráció rövid jelszóval', () => {
  it('passes', () => {
    cy.visit('/')
    const username = 'TesztElek';
    const password = '123';
    cy.get('.navbar').contains('Bejelentkezés').click();
    cy.get('form').contains('Regisztráljon itt').click();
    cy.get('#username').type(username);
    cy.get('#password').type(password);
    cy.get('.btn-primary').contains('Regisztráció').click();
    cy.get('.alert').contains('A jelszónak legalább 8 karakter hosszúnak kell lennie!');
  })
});

describe('Regisztráció rövid felhasználónévvel', () => {
  it('passes', () => {
    cy.visit('/')
    const username = 'Tesz';
    const password = '12345678';
    cy.get('.navbar').contains('Bejelentkezés').click();
    cy.get('form').contains('Regisztráljon itt').click();
    cy.get('#username').type(username);
    cy.get('#password').type(password);
    cy.get('.btn-primary').contains('Regisztráció').click();
    cy.get('.alert').contains('A felhasználónévnek legalább 6 karakter hosszúnak kell lennie!');
  })
});

describe('Regisztráció helyes hosszúságú adatokkal', () => {
  it('passes', () => {
    cy.visit('/')
    const username = 'TesztElek';
    const password = 'TitkosJelszo123';
    cy.get('.navbar').contains('Bejelentkezés').click();
    cy.get('form').contains('Regisztráljon itt').click();
    cy.get('#username').type(username);
    cy.get('#password').type(password);
    cy.get('.btn-primary').contains('Regisztráció').click();
    cy.get('.alert').contains('Sikeres regisztráció');
  })
});

describe('Regisztráció már létező felhasználónévvel', () => {
  it('Logs in using cy.loginAs', () => {
    const username = 'TesztElek';
    const password = 'TitkosJelszo123';
    cy.visit('/');
    cy.loginAs(username, password);
    cy.get('.navbar').contains('Profil').click();
    cy.get('.card-body').contains("user");
    cy.get('.navbar').contains('Kijelentkezés').click();
  });
});




