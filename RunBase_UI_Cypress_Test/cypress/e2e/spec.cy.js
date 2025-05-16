describe('Versenyek megjelennek a versenyek oldalon', () => {
  it('passes', () => {
    cy.visit('/')
    cy.get('[href="/versenyek"]').click();
    cy.wait(5000);
    cy.get(':nth-child(1) > .v-card > .v-card-title').should('exist');
  })

});

describe('Eredmények oldal nem elérhető bejelentkezés nélkül', () => {
  it('passes', () => {
    cy.visit('/')
    cy.get('[href="/eredmenyek"]').click();
    cy.url().should('include', '/login');
  })
});

describe('Eredmények oldal elérhető bejelentkezés után', () => {
  it('passes', () => {
    const username = 'Teszt Felhasználó3';
    cy.visit('/');
    cy.loginAs(username, 'TitkosJelszo123');
    cy.get('.navbar').contains('Eredmények').click()
    cy.get('.my-3').contains('Eredmények');
    cy.get('.navbar').contains('Kijelentkezés').click();
  })
});

describe('Eredmények oldalon kiválasztott eredmények megjelennek lista kiválasztása után', () => {
  it('passes', () => {
    cy.visit('/')
    cy.get('[href="/eredmenyek"]').click();
    cy.get(':nth-child(1) > .v-input > .v-input__control > .v-field > .v-field__append-inner > .mdi-menu-down').click();
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
    const username = 'Teszt Felhasználó2';
    cy.visit('/');
    cy.loginAs(username, 'TitkosJelszo123');
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
<<<<<<< HEAD
    cy.get('.bg-secondary').contains('Regisztráció').click();
    cy.get('#input-6').type(username);
    cy.get('#input-8').type(password);
    cy.get('.bg-primary').contains('Regisztráció').click();
    cy.get('.alert').contains('A jelszónak legalább 8 karakter hosszúnak kell lennie!');
=======
    cy.get('form').contains('Regisztráció').click();
    cy.get('#input-6').type(username);
    cy.get('#input-8').type(password);
    cy.get('.bg-primary').contains('Regisztráció').click();
    cy.get('.v-alert').contains('A jelszónak legalább 8 karakter hosszúnak kell lennie!');
>>>>>>> 10f9b4e457f823a8c3ebaed999844bf37926e7b9
  })
});

describe('Regisztráció rövid felhasználónévvel', () => {
  it('passes', () => {
    cy.visit('/')
    const username = 'Tesz';
    const password = '12345678';
    cy.get('.navbar').contains('Bejelentkezés').click();
<<<<<<< HEAD
    cy.get('.bg-secondary').contains('Regisztráció').click();
    cy.get('#input-6').type(username);
    cy.get('#input-8').type(password);
    cy.get('.bg-primary').contains('Regisztráció').click();
    cy.get('.alert').contains('A felhasználónévnek legalább 6 karakter hosszúnak kell lennie!');
=======
    cy.get('form').contains('Regisztráció').click();
    cy.get('#input-6').type(username);
    cy.get('#input-8').type(password);
    cy.get('.bg-primary').contains('Regisztráció').click();
    cy.get('.v-alert').contains('A felhasználónévnek legalább 6 karakter hosszúnak kell lennie!');
>>>>>>> 10f9b4e457f823a8c3ebaed999844bf37926e7b9
  })
});

describe('Regisztráció helyes hosszúságú adatokkal', () => {
  it('passes', () => {
    cy.visit('/')
    const username = 'TesztElek';
    const password = 'TitkosJelszo123';
    cy.get('.navbar').contains('Bejelentkezés').click();
<<<<<<< HEAD
    cy.get('.bg-secondary').contains('Regisztráció').click();
    cy.get('#input-6').type(username);
    cy.get('#input-8').type(password);
    cy.get('.bg-primary').contains('Regisztráció').click();
    cy.get('.alert').contains('Sikeres regisztráció');
=======
    cy.get('form').contains('Regisztráció').click();
    cy.get('#input-6').type(username);
    cy.get('#input-8').type(password);
    cy.get('.bg-primary').contains('Regisztráció').click();
    cy.get('.v-alert').contains('Sikeres regisztráció');
>>>>>>> 10f9b4e457f823a8c3ebaed999844bf37926e7b9
  })
});

describe('Bejelentkezés már létező felhasználóval', () => {
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

describe('Felhasználóhoz versenyző rendelése TAJ szám megadásával', () => {
  it('Logs in using cy.loginAs', () => {
    const username = 'TesztElek';
    const password = 'TitkosJelszo123';
    cy.visit('/');
    cy.loginAs(username, password);
    cy.get('.navbar').contains('Profil').click();
    cy.get('.card-body').contains("user");
    cy.get('.card-body').contains('Nincs hozzárendelve');
    cy.get('.form-control').type('955401173');
    cy.get('.container > :nth-child(2) > :nth-child(2) > .btn').contains('Azonosítás').click();
    cy.get('.card-body > :nth-child(3)').contains('9');
    cy.get('.navbar').contains('Kijelentkezés').click();
  });
});

describe('Felhasználóhoz adott versenyző adatainak ellenőrzése', () => {
  it('Logs in using cy.loginAs', () => {
    const username = 'TesztElek';
    const password = 'TitkosJelszo123';
    cy.visit('/');
    cy.loginAs(username, password);
    cy.get('.navbar').contains('Profil').click();
    cy.get('.card-body').contains("competitor");
    cy.get('.card-body > :nth-child(3)').contains('9');
    cy.get('.btn-primary').contains('Leírás').click();
    cy.get('.modal-header').contains('Barna Tamás');
    cy.get('.modal-body').contains('13:03:08');
    cy.visit('/');
    cy.get('.navbar').contains('Kijelentkezés').click();
  });
});

describe('Admin profillal létező felhasználó nevének módosítása', () => {
  it('Logs in using cy.loginAs', () => {
    const username = 'Teszt Felhasználó';
    const password = 'TitkosJelszo123';
    cy.visit('/');
    cy.loginAs(username, password);
    cy.get('.navbar').contains('Admin Panel').click();
    cy.get('#input-6').type('TesztElek');
    cy.get('.v-container > :nth-child(1) > :nth-child(2)').contains('Módosítás').click();
    cy.get('.v-card-text input').eq(0).type('11');
    cy.get('.v-card-actions > :nth-child(3)').contains('Mentés').click();
    cy.get('#input-6').clear().type('TesztElek11');
    cy.get(':nth-child(2) > .v-table > .v-table__wrapper > table > tbody > tr > :nth-child(2)').contains('TesztElek11');
    cy.get('.navbar').contains('Kijelentkezés').click();
  });
});

describe('Admin profillal létező felhasználó törlése', () => {
  it('Logs in using cy.loginAs', () => {
    const username = 'Teszt Felhasználó';
    cy.visit('/');
    cy.loginAs(username, 'TitkosJelszo123');
    cy.get('.navbar').contains('Admin Panel').click();
    cy.get('#input-6').type('TesztElek11');
    cy.get(':nth-child(2) > .v-table > .v-table__wrapper > table > tbody > tr > :nth-child(4) > .bg-error').click();
    cy.get('.v-data-table-rows-no-data > td').contains('No data available');
    cy.get('.navbar').contains('Kijelentkezés').click();
  });
});




