///<reference types="cypress" />
describe("Should and Then as a function", () => {
    beforeEach("Visit and setup webpage", () => {
      cy.visit("http://localhost:4200/pages")
      cy.viewport(1440,1200);
    })
    it("Then", () => {
      cy.contains("Form").click();
      cy.contains("Datepicker").click();
      // nastavit premenne
      const date = new Date (1998, 7, 17);

      let months = ["01", "02", "03", "04", "05", "06", "07", "08", '09', '10', '11' , '12'];
      let now = months[date.getMonth()] + " " + date.getDate() + " " + date.getFullYear(); //neviem to spravit cez premennu date pretoze riadok 20 chce String value
      let add10days = months[date.getMonth()] + " " +( date.getDate() + 10 ) + " " + date.getFullYear();
      
      cy.contains("Common Datepicker").parent().find("input").then(input => {
        cy.wrap(input).type(now);
        cy.wrap(input).then(value => {
          expect(value).have.value(now)
          
        })

        cy.wrap(input).clear();
        cy.wrap(input).type(add10days);
        cy.wrap(input).then(addedvalue => {
          expect(addedvalue).have.value(add10days);
        })
    })
})
})