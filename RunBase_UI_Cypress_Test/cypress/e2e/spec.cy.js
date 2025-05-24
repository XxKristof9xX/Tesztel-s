beforeEach(() => {
  cy.viewport(1280, 720);
});
describe('Versenyek megjelennek a versenyek oldalon', () => {
  it('passes', () => {
    cy.visit('/')
    cy.get('.navbar').contains("Versenyek").click();
    cy.wait(3000);
    cy.get(':nth-child(1) > .v-card > .v-card-title').should('exist');
  })

});

describe('Eredmények oldal nem elérhető bejelentkezés nélkül', () => {
  it('passes', () => {
    cy.visit('/')
    cy.get('.navbar').contains("Eredmények").click();
    cy.url().should('include', '/login');
  })
});

describe('Eredmények oldal elérhető bejelentkezés után', () => {
  it('Logs in using cy.loginAs', () => {
    const username = 'Teszt Felhasználó3';
    cy.visit('/');
    cy.loginAs(username, 'TitkosJelszo123');
    cy.get('.navbar').contains('Profil').click();
    cy.get('.navbar').contains('Eredmények').should('be.visible').click();
    cy.url().should('include', '/eredmenyek');
    cy.get('.my-3').contains('Eredmények');
  });
});

describe('Eredmények oldalon kiválasztott eredmények megjelennek lista kiválasztása után', () => {
  it('passes', () => {
    const username = 'Teszt Felhasználó3';
    cy.visit('/');
    cy.loginAs(username, 'TitkosJelszo123');
    cy.get('.navbar').contains('Profil').click();
    cy.get('.navbar').contains('Eredmények').should('be.visible').click();
    cy.get('.v-autocomplete').first().click();
    cy.wait(1000);
    cy.get('.v-list-item__content').contains('27. ALDI Női Futógála').should('exist');
  });
});

describe('Eredmények oldalon verseny és táv kiválasztása után megjelennek az adatok és a gráf', () => {
  it('passes', () => {
    const username = 'Teszt Felhasználó3';
    cy.visit('/');
    cy.loginAs(username, 'TitkosJelszo123');
    cy.get('.navbar').contains('Profil').click();
    cy.get('.navbar').contains('Eredmények').should('be.visible').click();
    cy.get('.v-autocomplete').first().click();
    cy.wait(1000);
    cy.get('.v-list-item__content').contains('27. ALDI Női Futógála').click();
    cy.get('.v-autocomplete').eq(1).click();
    cy.get('.v-list-item__content').contains('5 km').click();
    cy.get('#myChart').should('exist');
  });
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
    cy.get(':nth-child(2) > .v-btn').click();
    cy.contains('.v-list-item-title', 'Admin Panel').should('be.visible').click();
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
    cy.get(':nth-child(2) > .v-btn').click();
    cy.contains('.v-list-item-title', 'Admin Panel').should('be.visible').click();
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
    cy.get('.bg-secondary').contains('Regisztráció').click();
    cy.get('#input-12').type(username);
    cy.get('#input-14').type(password);
    cy.get('.v-messages__message').contains('Minimum 8 karakter hosszú legyen');
    cy.contains('button', 'Regisztráció').should('be.disabled');
  })
});

describe('Regisztráció rövid felhasználónévvel', () => {
  it('passes', () => {
    cy.visit('/')
    const username = 'Tesz';
    const password = '12345678';
    cy.get('.navbar').contains('Bejelentkezés').click();
    cy.get('.bg-secondary').contains('Regisztráció').click();
    cy.get('#input-12').type(username);
    cy.get('#input-14').type(password);
    cy.get('.v-messages__message').contains('Minimum 6 karakter hosszú legyen');
    cy.contains('button', 'Regisztráció').should('be.disabled');
  })
});

describe('Regisztráció helyes hosszúságú adatokkal', () => {
  it('passes', () => {
    cy.visit('/')
    const username = 'TesztElek';
    const password = 'TitkosJelszo123';
    cy.get('.navbar').contains('Bejelentkezés').click();
    cy.get('.bg-secondary').contains('Regisztráció').click();
    cy.get('#input-12').type(username);
    cy.get('#input-14').type(password);
    cy.get('.bg-primary').contains('Regisztráció').click();
    cy.get('.v-alert').contains('Sikeres regisztráció');
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
    cy.get(':nth-child(2) > :nth-child(2) > :nth-child(2) > .btn').contains('Azonosítás').click();
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
    cy.wait(1000);
    cy.get(':nth-child(2) > .v-btn').click();
    cy.contains('.v-list-item-title', 'Admin Panel').should('be.visible').click();
    cy.get('#input-20').type('TesztElek');
    cy.get('.v-container > :nth-child(1) > :nth-child(2)').contains('Módosítás').click();
    cy.get('.v-card-text input').eq(0).type('11');
    cy.get('.v-card-actions > :nth-child(3)').contains('Mentés').click();
    cy.get('#input-20').clear().type('TesztElek11');
    cy.get(':nth-child(2) > .v-table > .v-table__wrapper > table > tbody > tr > :nth-child(2)').contains('TesztElek11');
    cy.get('.navbar').contains('Kijelentkezés').click();
  });
});



describe('Regisztráció helyes adatokkal és helyes versenyző adatokkal', () => {
  it('passes', () => {
    cy.visit('/')
    const username = 'TesztBéla';
    const password = 'TitkosJelszo123';
    cy.get('.navbar').contains('Bejelentkezés').click();
    cy.get('.bg-secondary').contains('Regisztráció').click();
    cy.get('#input-12').type(username);
    cy.get('#input-14').type(password);
    cy.get('.v-selection-control').click();
    cy.contains('.v-label', 'Név').parents('.v-input').find('input').type("Futó Béla");
    cy.contains('.v-label', 'Születési év').parents('.v-input').find('input').type("1989");
    cy.contains('.v-label', 'Neme').parents('.v-select').click();
    cy.get('.v-list-item__content').contains('Férfi').click();
    cy.contains('.v-label', 'TAJ szám').parents('.v-input').find('input').type("987654321");
    cy.get('.bg-primary').contains('Regisztráció').click();
    cy.get('.v-alert').contains('Sikeres regisztráció');
  })
});

describe('Jelentkezés versenyre regisztrált versenyzővel', () => {
  it('Logs in using cy.loginAs', () => {
    const username = 'TesztBéla';
    const password = 'TitkosJelszo123';
    cy.visit('/');
    cy.loginAs(username, password);
    cy.get('.navbar').contains('Profil').click();
    cy.get('.card-body').contains("competitor");
    cy.get('.navbar').contains('Versenyek').should('be.visible').click();
    cy.wait(3000);
    cy.get(':nth-child(8) > .v-card > .v-card-actions > .v-btn > .v-btn__content').click();
    cy.contains('.v-label', 'Válassz távot').parents('.v-select').click();
    cy.get('.v-list-item__content').contains('5').click();
    cy.get('.v-btn').contains('Jelentkezés').click();
    cy.wait(3000);
    cy.get('.v-alert').contains('Sikeres jelentkezés');
  });
});


describe('Admin profillal létező felhasználó törlése', () => {
  it('Logs in using cy.loginAs', () => {
    const username = 'Teszt Felhasználó';
    cy.visit('/');
    cy.loginAs(username, 'TitkosJelszo123');
    cy.wait(1000);
    cy.get(':nth-child(2) > .v-btn').click();
    cy.contains('.v-list-item-title', 'Admin Panel').should('be.visible').click();
    cy.get('#input-20').clear().type('TesztElek11');
    cy.get(':nth-child(2) > .v-table > .v-table__wrapper > table > tbody > tr > .d-flex').contains("Törlés").click();
    cy.get('.v-data-table-rows-no-data > td').contains('No data available');
    cy.get('#input-20').clear().type('TesztBéla');
    cy.get(':nth-child(2) > .v-table > .v-table__wrapper > table > tbody > tr > .d-flex').contains("Törlés").click();
    cy.get('.v-data-table-rows-no-data > td').contains('No data available');
    cy.get('#input-29').clear().type('Futó Béla');
    cy.get(':nth-child(1) > .d-flex > .bg-error.v-btn--size-small').contains("Törlés").click();
    cy.get('.navbar').contains('Kijelentkezés').click();
  });
});


