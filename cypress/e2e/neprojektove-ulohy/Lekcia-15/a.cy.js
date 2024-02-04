///<reference types='cypress'/>

describe("Uloha A", ()=> {
    beforeEach('Visit and setup webpage', () =>{
        cy.visit('http://localhost:4200/ pages');
        cy.viewport(1400, 1200);
    })
    it('Smart Tables', ()=> {
        cy.contains('Tables & Data').click();
        cy.contains('Smart Table').click();
        cy.get('[placeholder="Age"]').clear().type('28').should('have.value', "28"); //netreba .click() > type uz tuto funkcionalitu zahrna
    })
    after('Test Multiple values', ()=> {
        cy.get('[placeholder="Age"]').click();

        const ages = ['18', '25', '40', '33']
        cy.wrap(ages).each(ages =>{
            cy.get('[placeholder="Age"]').click().then( enterAges => {
                cy.wrap(enterAges).get('[placeholder="Age"]').clear().type(ages);
                cy.get('table-cell-view-mode').should("contain", ages);
            })
        })

    })
})