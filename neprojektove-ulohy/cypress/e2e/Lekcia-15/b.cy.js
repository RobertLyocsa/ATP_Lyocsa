///<reference types='cypress' />

describe("Uloha A", () => {
    beforeEach('Visit and setup webpage', () => {
        cy.visit('https://web.automationtesting.sk/');
        cy.viewport(1400, 1200);
    })
    it('FAQ', () => {
        cy.contains('Frequently Asked Questions').should('exist');

        cy.contains('What should be my license policy?').click();
        cy.get('#ha-accordion__item-content-1852').wait(1500)
            .then(($faq1) => {
            const faqText = $faq1.text();
            expect(faqText).to.include('dolore eu');
        });
        cy.contains('How to start my news business?').click();
        cy.get('#ha-accordion__item-content-1851').wait(1500)
            .then(($faq1) => {
            const faqText = $faq1.text();
            expect(faqText).to.include('dolore eu');
        });
        cy.contains('Any discount coming soon?').click();
        cy.get('#ha-accordion__item-content-1853').wait(1500)
            .then(($faq1) => {
            const faqText = $faq1.text();
            expect(faqText).to.include('dolore eu');
        });
        cy.contains('How to install and active the free plugin?').click();
        cy.get('#ha-accordion__item-content-1853').wait(1500)
            .then(($faq1) => {
            const faqText = $faq1.text();
            expect(faqText).to.include('dolore eu');
        });

    })
});