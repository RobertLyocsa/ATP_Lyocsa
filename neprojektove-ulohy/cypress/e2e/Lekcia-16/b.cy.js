///<reference types="cypress" />
describe("Command intercept for Conduit", () => {
    beforeEach("Setup", () => {
        cy.visit("http://localhost:3000/")
        cy.viewport(1440, 1200) 
    })

    it("Use intercept", () => {//
        cy.intercept("http://localhost:3000/api/articles?limit=10&offset=0", 
        {
            "articles": [
                {
                    "slug": "article-without-change-pe3hkj",
                    "title": "Modified Data",
                    "description": "Modified Data",
                    "body": "Modified Data",
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
//log in
        cy.get(".nav-link").contains("Sign in").click() 
        cy.get('[placeholder="Email"]').type("email@email.sk") 
        cy.get('[placeholder="Password"]').type("heslo") 

        cy.get("button").contains("Sign in").click() 
        cy.wait(2000) 
//make 1 article
        const titles = ["Article 01"]; 
// article details
        cy.wrap(titles).each(title => { 
            cy.get('[href="/editor"]').click() 
            cy.get('[placeholder="Article Title"]').clear().type(title).should("have.value", title) 
            cy.get('[placeholder="What\'s this article about?"]').clear().type("Unmodified Data") 
            cy.get('[placeholder="Write your article (in markdown)"]').clear().type("Unmodified Data") 
            cy.get("button").contains("Publish").click() 
        });

        //replacing global feed with own response
        cy.contains("conduit").click()
        cy.contains("Global Feed").click()

        cy.get(".article-preview").should("contain", "Modified Data");
        // Uloha je identicka od ulohy A, len s menej krokmi. Pochopil som a rozumiem funkcionalite intercept
    })
})