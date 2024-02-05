///<reference types="cypress" />
const { Given, When, Then, } = require("@badeball/cypress-cucumber-preprocessor");

Given("Test if webpage is active", () => {
    cy.visit("https://www.dovoznakupov.sk/")
    cy.viewport(1400, 1200)
    // Over ze sa nacitala stranka
    cy.get(".buttons").should("be.visible")
})
When("Accept cookies", () =>{
    cy.get("#agy-accept").click()
    cy.get("#cookie_action_close_header").click()
}),
When ("I test if the phone numbers are correct", () =>
{
    cy.log("Tu som nasiel 1. cislo");
    cy.get('a[href="tel:0948618504"]').should('exist');
    cy.get('a[href="tel:0948618504"]').invoke('text').then((phoneNumber1) => {
        const expectedPhoneNumber1 = '0948 618 504';

        expect(phoneNumber1.trim()).to.equal(expectedPhoneNumber1);
    })
    cy.log("Tu som nasiel 2. cislo, vieme ze toto cislo sa nezhoduje");
    cy.get('a[href="tel:0948618504"]').should('exist');
    cy.get('h1').invoke('text').then((phoneNumber2) => {
        const expectedPhoneNumber2 = '0948 618 504';

        expect(phoneNumber2.trim()).to.not.equal(expectedPhoneNumber2);
    });
}),
When("I test buttons in main menu", () => {

    cy.contains('Otváracie hodiny').click()
    cy.get('#ui-id-2').should('be.visible');

    cy.contains('Dôležité informácie').click()
    cy.get('#ui-id-4').should('be.visible');

    cy.contains('Možnosti a ceny doručenia').click()
    cy.get('#ui-id-6').should('contain', "");
}),
When("I test the functionality of the filter", () => {

    cy.get(".w-nav-title").eq(0).click()
    cy.get("h1").should("contain","Alkoholické nápoje")
    cy.get(".w-nav-title").contains("Víno").click()
    cy.get("h1").should("contain","Víno")
    cy.get(".w-nav-title").contains("Pivo").click()
    cy.get("h1").should("contain","Pivo")
    cy.get(".w-nav-title").contains("Nealko").click({force:true})
    cy.get("h1").should("contain","Nealkoholické pivo")
    cy.get(".w-nav-title").contains("Pochutiny").click()
    cy.get("h1").should("contain","Pochutiny")
    cy.get(".w-nav-title").contains("Obchod").click()
    cy.get("h1").should("contain","Obchod")
    cy.get(".w-nav-title").contains("Košík").click()
    cy.get("h1").should("contain","Košík")
    cy.get(".w-nav-title").contains("Môj účet").click()
    cy.get("h1").should("contain","Môj účet")
    cy.get(".w-nav-title").contains("Pokladňa").click()
    cy.get("h1").should("contain","Košík")
    cy.get(".w-nav-title").contains("Informácie").click()
    cy.get("h1").should("contain","Stránka nenájdená")
    cy.go(-1);

}),
When("I try add an item to the basket", () => {
    cy.fixture('FixtureFor19.json').each((Array) => {
        if (!Array) {
          cy.log('Je chyba vo fixture');
          return;
        }
        const { product, price, amount } = Array;

        if (product === undefined || price === undefined || amount === undefined) {
          cy.log('Error: One or more properties in fixture data are undefined');
          return;
        }
    cy.get('.search-field')
    .clear().should('have.value', '')
    .type(`${product}{enter}`)
    .should('have.value', product);

    cy.get('.input-text').clear()
    .should('have.value', '')
    .type(amount).should('have.value', amount);

    cy.get('.summary').contains(price);
    cy.get('div.summary.entry-summary > form > button').click();
    })
}),
When("Look and test basket", () => {
    cy.wait(1000);
    cy.contains("Zobraziť košík").click({force: true})
    
cy.fixture('FixtureFor19.json').then((fixtures) => {
  fixtures.forEach(({ product, price, amount },i) => { //amount 
        
        cy.get('tbody')
            .should('contain', product)
            .and('contain', price)

            //.and('contain', amount);
            cy.get('tbody input').eq(i)
            .should('have.value', amount);

  })
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
})
}),
Then("Order your product", () => {

    cy.get('[class="checkout-button button alt wc-forward"]').click();

    cy.get("#billing_first_name").type("Ladislav")
    cy.get("#billing_last_name").type("Mrkvička")
    cy.get("#billing_address_1").type("Nezabudkova")
    cy.get("#billing_postcode").type("097844")
    cy.get("#billing_city").type("Trnovce")
    cy.get("#billing_phone").type("09995595")
    cy.get("#billing_email").type("email@email.com")
    cy.get("#billing_first_name").type("Ladislav")
    cy.get("#billing_first_name").type("Ladislav")
    cy.get("#billing_first_name").type("Ladislav")
    cy.get("#terms").check({force:true}).should("be.checked")

})