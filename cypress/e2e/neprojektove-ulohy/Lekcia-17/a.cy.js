///<reference types = "cypress" />
describe ('Uloha A', () => {
    beforeEach('', () => {
        cy.visit('https://web.automationtesting.sk/');
        cy.viewport(1440, 1200);
    })
    it('Multi Step Form Test', () => {

        const name = 'John Doe';
        const email = 'john.doe@example.com';
        const date = '2024-01-23';
        const message = 'Toto je testovacia správa.';

        cy.contains('Multi Step Form').click();
        cy.get('#msf-text-your-name').clear().should('have.value', "").type(name).should('have.value', name);
        cy.get('#msf-mail-your-email').clear().should('have.value', "").type(email).should('have.value', email);
        cy.get('#msf-date-select-date-of-order').type(date).should('have.value', date);
        // not a checkbox smh cy.get('#multi-step-form > div.fw-wizard-step-container > div > div.fw-wizard-step.fw-current > div.fw-step-part > div.fw-step-part-body > div:nth-child(4) > span > label').eq(0).check({force: true}).should("be.checked");
        cy.get('#multi-step-form > div.fw-wizard-step-container > div > div.fw-wizard-step.fw-current > div.fw-step-part > div.fw-step-part-body > div:nth-child(4) > span > label').eq(0).click();
        cy.get('#multi-step-form > div.fw-wizard-button-container > div > div > button.fw-button-next').click();

        //next page

        cy.contains('Shoes').click();
        cy.contains('Pants').click();
        cy.get('#multi-step-form > div.fw-wizard-step-container > div > div.fw-wizard-step.fw-current > div.fw-step-part > div.fw-step-part-body > div:nth-child(2) > span > span.selection > span').type('{enter}');
        cy.get('#multi-step-form > div.fw-wizard-button-container > div > div > button.fw-button-next').click();

        cy.get('#msf-textarea-write-us-a-message').type(message).should('have.value', message);
        cy.get('#multi-step-form > div.fw-wizard-step-container > div > div.fw-wizard-step.fw-current > button').click();

        
    })
})