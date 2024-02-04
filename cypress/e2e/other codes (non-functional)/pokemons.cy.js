///<reference types="cypress" />
const { Given, When, } = require("@badeball/cypress-cucumber-preprocessor");
 
Given('I visit a landing page', () =>
{
    cy.viewport(1440, 1200);
    cy.visit('https://automationtesting.sk/')
})
 
When('I navigate to Pokemons section', () =>
{
  cy.contains('Pokemons').click();
})
 
When('I click on first pokeball', () =>
{
  cy.get('.small').eq(0).click();
})
 
When('I click on second pokeball', () =>
{
  cy.get('.small').eq(1).click();
})
 
When('I click on the rest of them', () =>
{
  cy.get('.small').eq(2).click();
  cy.get('.small').eq(3).click();
  cy.get('.small').eq(4).click();
  cy.get('.small').eq(5).click();
  cy.get('.small').eq(6).click();
  cy.get('.small').eq(7).click();
 
})