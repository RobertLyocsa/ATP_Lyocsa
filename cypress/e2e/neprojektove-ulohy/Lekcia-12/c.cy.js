/// <reference types="cypress" />

describe('template spec', () => {
    it('passes', () => {
      cy.visit('https://the-internet.herokuapp.com/')
      cy.viewport(1800, 1400);
  
      cy.contains("Entry Ad").click();
      cy.contains('Close').click();

      cy.get('#modal > div.modal > div.modal-footer > p').should('not.be.visible');


    })
  })