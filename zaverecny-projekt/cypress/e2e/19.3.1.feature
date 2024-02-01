Feature: Testing website

  Scenario: Shopping and purchasing products

    Given I visit the website
    When I accept cookies
    And Double-check fixtures
    And I select products
    When I proceed to checkout
    And I fill out shipping information
    Then I complete the purchase