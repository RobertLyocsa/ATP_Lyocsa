///<reference types="cypress" />
describe("Command intercept for Conduit", () => {
    beforeEach("Setup", () => {
        cy.visit("http://localhost:3000/")
        cy.viewport(1440, 1200) //
    })

    it("Intercepted request", () => {
        cy.intercept("http://localhost:3000/api/articles?limit=10&offset=0", 
        {
            "articles": [
                {
                    "slug": "article-without-change-pe3hkj",
                    "title": "Data",
                    "description": "Data",
                    "body": "Data",
                    "createdAt": "2025-04-22T12:07:49.180A",
                    "updatedAt": "2025-04-20T12:07:49.180A",
                    "tagList": [
                        "cypress"
                    ],
                    "favorited": true, 
                    "favoritesCount": 0, 
                    "author": { 
                        "username": "Robert", 
                        "bio": "Robert ", 
                        "image": "https://static.productionready.io/images/smiley-cyrus.jpg", 
                        "following": false 
                    }
                }
            ],
            "articlesCount": 1 
        })

        cy.get(".nav-link").contains("Sign in").click() 
        cy.get('[placeholder="Email"]').type("email@email.sk") 
        cy.get('[placeholder="Password"]').type("heslo") 

        cy.get("button").contains("Sign in").click() 
        cy.wait(2000) 
//make 3 articles 
        const titles = ["Article 01", "Article 02", "Article 03"]; 
// article details
        cy.wrap(titles).each(title => { 
            cy.get('[href="/editor"]').click() 
            cy.get('[placeholder="Article Title"]').clear().type(title).should("have.value", title) 
            cy.get('[placeholder="What\'s this article about?"]').clear().type("Hello") 
            cy.get('[placeholder="Write your article (in markdown)"]').type("World") 
            cy.get("button").contains("Publish").click() 
        });

        cy.get('[href="/editor"]').click()
        cy.get('[placeholder="Article Title"]').clear().type("Toto nebude na stranke").should("have.value", "Toto nebude na stranke"); 
        cy.get('[placeholder="What\'s this article about?"]').clear().type("Sumar").should("have.value", "Sumar"); 
        cy.get("textarea").clear().type("Telo clanku").should("have.value", "Telo clanku"); 
        cy.get("button").contains("Publish").click() 

        //replacing global feed with own response
        cy.contains("conduit").click()
        cy.contains("Global Feed").click()

        cy.get(".article-preview").should("contain", "Data");
    })
})