///<reference types="cypress"/>
describe("ulohaA",() => {
    before("Navstiv url adressu a vyber 'a' elementy",() => {
        cy.visit("https://sortablejs.github.io/Sortable/#cloning")
        cy.viewport(1400, 1200)
    } )
    
    it("Najdi a clickni", () => {
        cy.get("a").contains("Vue.Draggable").click()
        cy.get(".row.frameworks").contains("Vue.Draggable")
        cy.get("a").contains("react-sortablejs").click()
        cy.get(".row.frameworks").contains("react-sortablejs")
        cy.get("a").contains("ngx-sortablejs").click()
        cy.get(".row.frameworks").contains("ngx-sortablejs")
        cy.get("a").contains("jquery-sortablejs").click()
        cy.get(".row.frameworks").contains("jquery-sortablejs")
        cy.get("a").contains("knockout-sortablejs").click()
        cy.get(".row.frameworks").contains("knockout-sortablejs")
        cy.get("a").contains("meteor-sortablejs").click()
        cy.get(".row.frameworks").contains("meteor-sortablejs")
        cy.get("a").contains("polymer-sortablejs").click()
        cy.get(".row.frameworks").contains("polymer-sortablejs")
        cy.get("a").contains("ember-sortablejs").click()
        cy.get(".row.frameworks").contains("ember-sortablejs")
    })
})