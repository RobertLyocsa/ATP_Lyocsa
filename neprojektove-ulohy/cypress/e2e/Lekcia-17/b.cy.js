///<reference types="cypress" />

describe('Uloha B', () => {
    beforeEach(() => {
      cy.visit('https://web.automationtesting.sk/');
      cy.viewport(1440, 1200);
    });
    it('Multi Step Form Test', () => {
  //Mam(Mal) problemy s fixture, snazim sa to riesit takymto sposobom
      cy.fixture('dataFor17b').each((data) => {
        if (!data) {
          cy.log('Error: Fixture data is undefined or null');
           return;
        }
        const { meno, email, date, message } = data;
  
        if (meno === undefined || email === undefined || date === undefined || message === undefined) {
          cy.log('Error: One or more properties in fixture data are undefined');
          return;
        }
        
        cy.contains('Multi Step Form').click();
        cy.get('#msf-text-your-name').clear().should('have.value', '').type(meno).should('have.value', meno);
        cy.get('#msf-mail-your-email').clear().should('have.value', '').type(email).should('have.value', email);
        cy.get('#msf-date-select-date-of-order').type(date).should('have.value', date);
        cy.get('#multi-step-form > div.fw-wizard-step-container > div > div.fw-wizard-step.fw-current > div.fw-step-part > div.fw-step-part-body > div:nth-child(4) > span > label')
        .eq(0).click();
        cy.get('#multi-step-form > div.fw-wizard-button-container > div > div > button.fw-button-next').click();
        
        // Next page
        cy.contains('Shoes').click();
        cy.contains('Pants').click();
        cy.get('#multi-step-form > div.fw-wizard-step-container > div > div.fw-wizard-step.fw-current > div.fw-step-part > div.fw-step-part-body > div:nth-child(2) > span > span.selection > span')
        .type('{enter}');
        cy.get('#multi-step-form > div.fw-wizard-button-container > div > div > button.fw-button-next').click();
  
        cy.get('#msf-textarea-write-us-a-message').type(message).should('have.value', message);
        cy.get('#multi-step-form > div.fw-wizard-step-container > div > div.fw-wizard-step.fw-current > button').click();
        cy.go(-1);
        cy.wait(1500);
      });
    });
  });
  