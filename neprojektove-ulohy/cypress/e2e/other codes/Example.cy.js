///<reference types="cypress" />

describe("Should and Then as a function", () => {
    beforeEach("Visit and setup webpage", () => {
        cy.visit("http://localhost:4200/pages")
        cy.viewport(1440,1200)
    })
    it("Test with 1 name", () => {
        cy.contains("Modal & Overlays").click()
        cy.contains("Dialog").click()
        cy.contains("Enter Name").click()
        cy.get('[placeholder="Name"]').type("Peter").should("have.value","Peter")
        
        cy.contains("Cancel").click()
        cy.contains("Names").next().should("contain","")
        
        cy.contains("Enter Name").click()
        cy.get('[placeholder="Name"]').type("Peter").should("have.value","Peter")
        cy.contains("Submit").click()
        cy.contains("Names").next().should("contain","Peter")
    })
    it("Test with more names", () => {
        cy.contains("Modal & Overlays").click()
        cy.contains("Dialog").click()
        
        const names = ['Lukas', "Lenka", 'Peter', "Tatiana", 'Tibor', "Anna", 'Ján', "Barbora"]
        cy.wrap(names).each( names => {
            cy.contains("Enter Name").click().then( enterName => {
                cy.wrap(enterName).get("input").clear().type(names).get("button").contains("Submit").click()
                cy.get(".result-from-dialog").then ( body => {
                    cy.wrap(body).should("contain", names)                                                    
                })

            })

        })

    })

})


