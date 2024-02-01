///<reference types="cypress" />

describe('Uloha C', () => {
    beforeEach('', () => {
      cy.visit('https://web.automationtesting.sk/');
      cy.viewport(1440, 1200);
    });
  
    it('Multi Step Form Test, 3 pouzivatelia', () => {
      cy.fixture('dataFor17c').each((user) => {
        cy.wrap(user).as('userData'); // inac by som to musel pisat 3x 
  
        cy.get('@userData').then(({ name, email, date, message }) => {
          cy.contains('Multi Step Form').click();
          cy.get('#msf-text-your-name').clear().should('have.value', '').type(name).should('have.value', name);
          cy.get('#msf-mail-your-email').clear().should('have.value', '').type(email).should('have.value', email);
          cy.get('#msf-date-select-date-of-order').type(date).should('have.value', date);
          cy.get('#multi-step-form > div.fw-wizard-step-container > div > div.fw-wizard-step.fw-current > div.fw-step-part > div.fw-step-part-body > div:nth-child(4) > span > label')
            .eq(0).click();
          cy.get('#multi-step-form > div.fw-wizard-button-container > div > div > button.fw-button-next').click();
  
          // Next page
          cy.contains('Shoes').click();
          cy.contains('Pants').click();
          cy.get('#multi-step-form > div.fw-wizard-step-container > div > div.fw-wizard-step.fw-current > div.fw-step-part > div.fw-step-part-body > div:nth-child(2) > span > span.selection > span').type('{enter}');
          cy.get('#multi-step-form > div.fw-wizard-button-container > div > div > button.fw-button-next').click();
  
          cy.get('#msf-textarea-write-us-a-message').type(message).should('have.value', message);
          cy.get('#multi-step-form > div.fw-wizard-step-container > div > div.fw-wizard-step.fw-current > button').click();
          cy.contains('Multi Step Form').click();
        });
      });
    });
  });      