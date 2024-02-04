///<reference types="cypress" />
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('I visit the website', () => {
  cy.visit('https://www.dovoznakupov.sk/');
  cy.viewport(1440, 1200);

  cy.contains('Vstúpiť').click();

});

When("I accept cookies", () => {

cy.get("#cookie_action_close_header").click();

});

When("Double-check fixtures", ()=> {
    cy.fixture('FixtureFor19.json').each((Array) => {
        if (!Array) {
            cy.log('Je chyba vo fixture');
            return;
        }
        const { product, price, amount } = Array;
        if (product === undefined || price === undefined || amount === undefined) {
  cy.log('Error: One or more properties in fixture data are undefined');
  return;
        });
        When('I selecr products', () => {
          cy.get('.search-field')
          .clear()
          .should('have.value', '')
          .type(`${product}{enter}`)
          .should('have.value', product);
          
          cy.get('.input-text')
          .clear()
          .should('have.value', '')
          .type(amount)
          .should('have.value', amount);
          cy.get('.summary').contains(price);
          cy.get('div.summary.entry-summary > form > button').click()
        });

When("I proceed to checkout", () => {
// Cart section
cy.get('div.woocommerce-notices-wrapper > div > a').click();

// Function 1 (Odstran produkt a vrat ho spat)
cy.get('.remove').eq(3).click();
cy.get('.restore-item').click({ force: true });

// Function 2 (Vykonaj zmenu v počte kusov a danú zmenu otestuj)
const value = 15;
const plus = value + 1;

cy.get('.product-quantity').eq(3).click().type(`{uparrow}`);
cy.get('button.button').eq(1).click({ force: true });
cy.get('input').eq(3).should('have.value', plus);

cy.wait(1000);

// Function 3 (otestuj kupony)
const couponCode = 'abcd';
cy.get('#coupon_code').type(couponCode).should('have.value', couponCode);
cy.get('button.button').eq(0).as('btn1').click({ force: true });
cy.get('@btn1').click({ force: true });
cy.get('.woocommerce-error').should('exist');

// Potentially continue with the checkout
cy.get('.checkout-button').click({ force: true });
});
When("I fill out shipping informations", () => {

});
Then("I complete the purchase", () => {

});
});