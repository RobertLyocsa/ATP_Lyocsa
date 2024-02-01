///<reference types="cypress"/>
//template cy.get("").contains("Item ").click()

describe("ulohaC", () => {
    before("Navstiv url adressu a vyber 'a' elementy",() => {
      cy.visit("https://sortablejs.github.io/Sortable/#cloning")
      cy.viewport(1400, 1200)
    })
    
    it("Oznac Grid Examples", function() {
      cy.get("#gridDemo")
    })
    after("Oznac Item 19", () => {
      cy.get(".grid-square").contains("Item 19")
    })
  })