///<reference types="cypress" />
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"

Given("Test if webpage is active", () => {
    cy.visit("https://www.dovoznakupov.sk/")
    cy.viewport(1400, 1200)
    // Over ze sa nacitala stranka
    cy.get(".buttons").should("be.visible")
})
When("Accept cookies", () =>{
    cy.get("#agy-accept").click()
    cy.get("#cookie_action_close_header").click()
})
When("Test buttons in main menu", () => {
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
})
When("Try add item to basket", () => {
    cy.get(".w-nav-list").eq(0).click();
    cy.get("h2").contains("Rum").click();
    cy.get(".product-h").eq(0).click();
    cy.contains("Pridať do košíka").click();
    cy.get(".woocommerce-message")
    .should("contain"," Produkt „Captain Morgen 35% 0,7 l SPICED GOLD“ bol pridaný do košíka. ")
    ;
})
When("Look and test basket", () => {
    cy.contains("Zobraziť košík").click()
    cy.get("tbody").should("contain","Captain Morgen 35% 0,7 l SPICED GOLD","12.99")
    cy.get('[type="number"]').clear().type("2")
    cy.contains("Skontrolovať a objednať").click()
})
Then("Order your product", () => {
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