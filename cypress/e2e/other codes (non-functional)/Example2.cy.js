///<reference types="cypress" />



describe("Should and Then as a function", () => {
  beforeEach("Visit and setup webpage", () => {
    cy.visit("http://localhost:4200/pages")
    cy.viewport(1440,1200)
  })
  it("Then", () => {
    cy.contains("Form").click()
    cy.contains("Datepicker").click()
    let months = ["Jan", "Feb", "Mar", "Apr", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dec"]
    const date = new Date (2023, 2, 1)
    let now = months[date.getMonth()] + " " + date.getDate() + " " + date.getFullYear()
    let plus30days = months[date.getMonth()] + " " +( date.getDate() + 30 ) + " " + date.getFullYear()
    
    cy.contains("Common Datepicker").parent().find("input").then(input => {
      cy.wrap(input).type(now)
      cy.wrap(input).then(value =>{
        expect(value).have.value(now)
      })
      cy.wrap(input).clear()
      cy.wrap(input).type(plus30days)
      cy.wrap(input).then(plusvalue => {
        expect(plusvalue).have.value(plus30days)
      })
    })
  })    
})