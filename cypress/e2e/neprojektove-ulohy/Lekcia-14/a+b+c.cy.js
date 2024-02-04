///<reference types="cypress" />

describe('template spec', () => {
    before('passes', () => {
      cy.visit('https://web.automationtesting.sk')
      cy.viewport(1400, 1000);
    })
    it('Zadanie A', ()=> {
      cy.contains('Multi Step Form').click(); 
      cy.get('h1').should("have.value", ''); // zo sposobu ako je zadanie pisane, predpokladam ze tot je krok cislo 1
      cy.get('h2').eq(0).should('have.value', '').and('be.visible'); //berie to aj eq(1) nerozumiem preco
      cy.get('#msf-text-your-name').should('be.visible').click(); //click na formular
      cy.get('#msf-text-your-name').should('be.visible').and("exist"); //overujem ze som stale na kroku cislo 1
      cy.get('input').should('be.enabled'); // overujem ze inputy su aktivne 
      cy.contains('I Agree with Terms And Conditions').click(); //neda sa checknut lebo to nie je checkbox, cize neviem overit cez ('be.checked)
      //zadanie hovori over, overil som, da sa "zaskrtnut"
  
  
      //cy.get('#multi-step-form [data-type=fw-radio] label, #multi-step-form [data-type=fw-checkbox] label').should('be.checked');
      //cy.get('label:nth-child(2)').should('be.visible');
      cy.log('Odtial zacina uloha B')
      cy.wait(3000)
  
      cy.get('#msf-text-your-name').type('Janko').should('have.value', "Janko");
      cy.get('#msf-mail-your-email').type('email@email.com').should('have.value', "email@email.com");
      cy.get('#msf-date-select-date-of-order').type('2020-01-17{enter}').should('have.value', '2020-01-17');
      cy.get('#content').find('label').contains('I Agree with Terms And Conditions').click();
  
      cy.contains('Ďalší krok').click();
      cy.contains('Choose Which Product you are interested in').should('have.value', '');
  
      cy.contains('Pants').click();
      cy.contains('Hats').click();
      cy.get('span.select2-selection.select2-selection--single[role="combobox"]').type('{enter}'); //improvise, addapt, overcome
      cy.contains('Ďalší krok').click();
  
      cy.contains('3rd step of form');
      cy.get('#msf-textarea-write-us-a-message').type('Bee Movie By Jerry Seinfeld NARRATOR: According to all known laws of aviation, a bee should not be able to fly. Its wings are too small, but bees fly anyway. BARRY BENSON: Barry graduates and questions the hives conformity. He discovers the Pollen Jocks, contemplates choices, and learns about the rigid bee society. The hives relentless work ethic surprises Barry. The story unfolds with humor, adventure, and social commentary.');
      cy.get('#multi-step-form > div.fw-wizard-step-container > div > div.fw-wizard-step.fw-current > div.fw-summary-container > button').click();
      cy.get('#wizard-summary > div:nth-child(1) > div:nth-child(2) > div.fw-step-summary').should('have.value', "");
      cy.contains('Janko');
      cy.contains('email@email.com');
      cy.contains('2020-01-17');
      cy.contains('I Agree with Terms And Conditions');
      cy.contains('Pants, Hats');
      cy.contains('Yes');
      cy.contains('Bee Movie By Jerry Seinfeld NARRATOR: According to all known laws of aviation, a bee should not be able to fly. Its wings are too small, but bees fly anyway. BARRY BENSON: Barry graduates and questions the hives conformity. He discovers the Pollen Jocks, contemplates choices, and learns about the rigid bee society. The hives relentless work ethic surprises Barry. The story unfolds with humor, adventure, and social commentary.');
      cy.get('#multi-step-form > div.fw-wizard-step-container > div > div.fw-wizard-step.fw-current > button').click();
  
      cy.log('Za chvilu zacne uloha C')
      cy.wait(3000);
      cy.contains('Form submitted.');
  
      cy.go(-1);
  
      cy.get('#msf-text-your-name').type('Jankooo').should('have.value', "Janko"); //ma byt pozitivny test
      cy.contains('Ďalší krok').click();
      cy.log('test failed successfully');
      
      // cy.contains('Your Email').should('have.value', "");
  
      //cy.get('#multi-step-form > div.fw-wizard-step-container > div > div.fw-wizard-step.fw-current > div.fw-step-part > div.fw-step-part-body > div:nth-child(2) > span > span.selection > span').trigger('mouseover').click();
      //cy.get('#multi-step-form > div.fw-wizard-step-container > div > div.fw-wizard-step.fw-current > div.fw-step-part > div.fw-step-part-body > div:nth-child(2) > span > span.selection > span').click();
    })
  })