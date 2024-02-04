///<reference types="cypress"/>
//template cy.get("").contains("Item ").click()

describe("ulohaB", () => {
    before("Navstiv url adressu a vyber 'a' elementy",() => {
      cy.visit("https://sortablejs.github.io/Sortable/#cloning")
      cy.viewport(1400, 1200)
    })
    
    it("Left side", function() {
      cy.get("#example2-left")
    })
    after("Rights side", () => {
    
      cy.get("#example2-right")
    })
  })