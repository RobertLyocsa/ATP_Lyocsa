describe('template spec', () => {
    it('passes', () => {
      cy.visit('https://web.automationtesting.sk/')
      cy.viewport(1800, 1400);

      //cy.get('.elementor-form').contains('First Name').type('Robert', {force: true});

      cy.get('#form-field-name').type('Robert').should("have.value", "Robert");
      cy.get('#form-field-field_c0493bd').type('Lyocsa').should("have.value", "Lyocsa");

      //cy.get('div:nth-child(4) > img').invoke('show');

      cy.get('#form-field-field_719ed13').type('0908000000100').should("have.value", "0908000000100");
      cy.get('#form-field-email').type('helloworld@gmail.com').should("have.value", "helloworld@gmail.com");
      cy.get('#form-field-message').type('Hodnotiaci, si SUPER!').should("have.value", "Hodnotiaci, si SUPER!");

      cy.get('[class="elementor-button elementor-size-sm elementor-animation-shrink"]').click();
      cy.contains('Your submission was successful.').should('have.value', '');

    })
  })