describe('template spec', () => {
    it('passes', () => {
      cy.visit('https://the-internet.herokuapp.com/add_remove_elements/')
      cy.get("button")
      cy.visit('https://the-internet.herokuapp.com/broken_images')
      cy.get("img:nth-child(4)")
      cy.visit('https://the-internet.herokuapp.com/challenging_dom')
      cy.get('[class="button success"]')
      cy.visit('https://the-internet.herokuapp.com/disappearing_elements')
      cy.get("li:nth-child(3)")
      cy.visit('https://the-internet.herokuapp.com/dropdown')
      cy.get("#dropdown")
    })
  })