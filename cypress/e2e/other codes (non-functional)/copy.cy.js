///<reference types="cypress" />

describe('Uloha Zaverecny projekt', () => {
    beforeEach('', () => {
      cy.visit('https://www.dovoznakupov.sk/');
      cy.viewport(1440, 1200);
    });
  
    it('Zaciatok testu', () => {
      cy.contains('Vstúpiť').click();
  
      //cookies
  
  
      cy.fixture('FixtureFor19.json').each((Array) => {
        if (!Array) {
          cy.log('Je chyba vo fixture');
          return;
        }
        const {product, price, amount} = Array;
         if (product === undefined || price === undefined || amount === undefined) {
          cy.log('Error: One or more properties in fixture data are undefined');
          return;
        }
  
        cy.get('.search-field').clear().should('have.value', '').type(product).should('have.value', product)
        .type('{enter}');
  
        cy.get('.input-text').clear().should('have.value', "").type(amount).should('have.value', amount);
        cy.get('.summary').contains(price);
        cy.get('div.summary.entry-summary > form > button').click(); 
      })
      it('Cart', () => {
        
      //Naviguj do kosika
      cy.get('div.woocommerce-notices-wrapper > div > a').click();
  
      //otestuj funkcionalitu nakupneho kosika\
      //function1
      cy.get('.remove').eq(3).click();
      cy.get('.restore-item').click()
  
      })
      it('Testing', () => {
  
      //function2
  
      const value = 15;
      const plus = value +1;
  
      cy.get('.product-quantity').eq(3).click().type(`{uparrow}`);
      cy.get('button.button').eq(1).click({ force: true });
      cy.get('input').eq(3).should('have.value', plus);
  
      //function3
      cy.get('#coupon_code').as('btn').type('abcd').should('have.value', "abcd");
      //cy.get('@btn').should('have.value', "abcd");
      //cy.get('body > div.l-canvas.sidebar_left.type_boxed > div.l-main > div > main > section > div > div > form > table > tbody > tr:nth-child(4) > td > div > button')
      cy.get('button.button').eq(0).as('btn1').click({ force: true })
      cy.get('@btn1').click({ force: true });
      //cy.get('button.button').eq(1).click({ force: true });
      cy.get('.woocommerce-error').should('exist');
  
      })
  
      //cy.get('body > div.l-canvas.sidebar_left.type_boxed > div.l-main > div > main > section > div > div > div.cart-collaterals > div > div > a')
      //.click();
      //.should('have.value', `${plus}`);
  
  
      //odtial asi pom nasleduje
  
    })
  })