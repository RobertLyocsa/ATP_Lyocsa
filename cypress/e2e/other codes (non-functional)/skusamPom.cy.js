///<reference types="cypress" />
import HomePage from '../pages/HomePage';
import CartPage from '../pages/CartPage';
import CheckoutPage from '../pages/CheckoutPage';

describe('Uloha Zaverecny projekt', () => {
  Given("Test if the webpage is active", () => {
    HomePage.visit();
    cy.viewport(1440, 1200);
    HomePage.visit();
  })
  beforeEach(() => {
  });

  it('Zaciatok testu', () => {
    HomePage.clickEnter();

    //cookies
    cy.fixture('FixtureFor19.json').each((Array) => {
      if (!Array) {
        cy.log('Je chyba vo fixture');
        return;
      }

      const { product, price, amount } = Array;

      if (product === undefined || price === undefined || amount === undefined) {
        cy.log('Error: One or more properties in fixture data are undefined');
        return;
      }

      HomePage.fillSearchField(product);
      HomePage.fillInputText(amount);
      HomePage.clickSummaryButton();
    });

    CartPage.clickCart();

    // Function 1 (Odstran produkt a vrat ho spat)
    CartPage.removeProduct(3);
    CartPage.restoreItem();

    // Function 2 (Vykonaj zmenu v počte kusov a danú zmenu otestuj)
    const value = 15;
    const plus = value + 1;

    CheckoutPage.changeProductQuantity(3, 1);
    CheckoutPage.clickButton(1);
    CheckoutPage.clickButton(3);

    cy.wait(1000);

    // Function 3 (otestuj kupony)
    const couponCode = 'abcd';
    CheckoutPage.fillCouponCode(couponCode);
    CheckoutPage.clickButton(0);
    CheckoutPage.clickButton(1);
    CheckoutPage.clickButton(3);

    CheckoutPage.clickCheckoutButton();
  });
});
