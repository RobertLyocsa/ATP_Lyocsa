describe('template spec', () => {
    it('passes', () => {
      cy.visit('https://the-internet.herokuapp.com/')
      cy.viewport(1800, 1400);
  
      cy.contains("Hovers").click();
      cy.get('div:nth-child(3) > img').trigger('mouseover', {timeout:3000});
      cy.get('div:nth-child(4) > img').trigger('mouseover');
      //cy.get('div:nth-child(4) > img').invoke('show');
      cy.get('div:nth-child(5) > img').trigger('mouseover');
      cy.get('#content > div > div:nth-child(5) > div > a').click({force:true});
      cy.wait(2000)
      cy.go(-1);
    })
  })