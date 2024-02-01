describe('template spec', () => {
    it('passes', () => {
  
      
      cy.visit('https://www.dovoznakupov.sk')
      cy.viewport(1440, 1200)
  
      cy.get('#agy-accept').click()
      cy.get('#cookie-law-info-bar').contains('Súhlasím').click()
      cy.get("a>strong")
      cy.get('body > footer > section > div.l-section-h.i-cf > div > div.vc_col-sm-3.wpb_column.vc_column_container > div > div > div > div > a > img')
      cy.get("body > footer > section > div.l-section-h.i-cf > div > div.vc_col-sm-9.wpb_column.vc_column_container > div > div > div:nth-child(1) > div > p > span > a")
      cy.get('[class="fa fa-shopping-cart"]')
      cy.get("#woocommerce-product-search-field-0")
  
    })
  })