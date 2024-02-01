describe('template spec', () => {
    it('passes', () => {
      cy.visit('https://the-internet.herokuapp.com/inputs')
      cy.get("input")
      cy.visit('https://the-internet.herokuapp.com/exit_intent')
      cy.get("div.modal-footer > p")
      cy.visit('https://the-internet.herokuapp.com/floating_menu')
      cy.get("img")
      cy.visit('https://the-internet.herokuapp.com/checkboxes')
      cy.get("input[type=checkbox]:nth-child(1)")
      cy.visit('https://the-internet.herokuapp.com/context_menu')
      cy.get("#hot-spot")
    })
  })