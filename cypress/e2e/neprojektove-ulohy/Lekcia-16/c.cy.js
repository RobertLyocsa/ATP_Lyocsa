///<reference types="cypress" />
describe("Uloha 3 - this.data", () => {
    beforeEach('Setup', () => {
        cy.visit('http://localhost:3000/')
        cy.viewport(1440, 1200);
        
        cy.fixture("dataForTest.json").then(function(data){
            this.data = data
        })
    })
    it("C", function(){ //using intercept & this.data
        // grabbing data from .json
        cy.intercept("POST", "**/articles*", (req) => {                                         
        req.body.article.title = this.data.title
        req.body.article.description = this.data.description
        req.body.article.body = this.data.body

    })//login

    cy.get('[href="/user/login"]').click()                                                  
    cy.get('[placeholder="Email"]').type("email@email.sk")
    cy.get('[placeholder="Password"]').type("heslo")
    cy.get('[type="submit"]').click()

    cy.contains("Global Feed").click()

    cy.wait(2000)
    //article that is intercepted
    cy.get('[href="/editor"]').click()
    cy.get('[placeholder="Article Title"]').type("Uloha 3")                                 
    cy.get('[placeholder="What\'s this article about?"]').type("Article about uloha 3")
    cy.get("textarea").type("Text about uloha 3")
    cy.get(".btn-primary").click()
    
    cy.wait(2000)
    
    cy.contains("conduit").click()
    cy.contains("Global Feed").click()
    cy.contains(this.data.title).click()
    cy.get("h1").should("contain",this.data.title)                  
    cy.get(".col-md-12").should("contain",this.data.body)
})
})