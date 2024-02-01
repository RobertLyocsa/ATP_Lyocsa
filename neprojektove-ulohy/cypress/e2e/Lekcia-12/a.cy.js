///<reference types="cypress"/>

describe('template spec', () => {
    it('passes', () => {
      cy.visit('https://the-internet.herokuapp.com')
      cy.viewport(1800, 1400);
  
      cy.contains("Dynamic Controls").click();
      cy.get('#checkbox > input[type=checkbox]').check();
      cy.get('button').eq(0).click();
      cy.wait(2000);
      cy.contains("It's gone!");
      cy.contains('Add').click();
      cy.contains("It's back!");
    })
  })