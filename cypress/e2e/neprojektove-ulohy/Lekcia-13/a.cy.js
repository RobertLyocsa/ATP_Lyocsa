describe('template spec', () => {
    it('passes', () => {
      cy.visit('https://web.automationtesting.sk/')
      cy.viewport(1800, 1400);
  
      cy.contains("Multi Step Form").click();
      cy.get('#msf-text-your-name').type('Janko').should('have.value', "Janko");
      cy.get('#msf-mail-your-email').type('email@email.com').should('have.value', "email@email.com");
      cy.get('#msf-date-select-date-of-order').type('2020-01-17{enter}').should('have.value', '2020-01-17');
      cy.get('#content').find('label').contains('I Agree with Terms And Conditions').click();
      cy.contains('Ďalší krok').click();
  
      cy.contains('Pants').click();
      cy.contains('Hats').click();
      cy.get('span.select2-selection.select2-selection--single[role="combobox"]').type('{enter}');
      cy.contains('Ďalší krok').click();
      cy.get('#multi-step-form > div.fw-wizard-step-container > div > div.fw-wizard-step.fw-current > button').click();
      cy.wait(3000);
      cy.get('h3').should('have.value', "");
      
    })
  })