///<reference types="cypress"/>

describe('template spec', () => {
    it('passes', () => {
      cy.visit('http://localhost:4200/pages')
      cy.viewport(1800, 1400);
  
      cy.contains("Layout").click();
      cy.contains('Stepper').click();
      cy.get('button:nth-child(4)').click();
      cy.get('button:nth-child(4)').click();
      cy.get('button:nth-child(5)').click();

      //otestujeme Prev
      cy.get('button:nth-child(3)').eq(2).click();

    })
  })