Feature: Testujem na podstranke 
    Scenario: Overujem funkcnost podstranky dialog https://www.dovoznakupov.sk/
    
    Given Test if webpage is active 'Smart Table'
    When Accept cookies 'Open Dialog'
    When Test buttons in main menu 'Open Dialog'
    When Try add item to basket 'Open Dialog with component'
    When Look and test basket 'Open dialog with component'
    Then Order your product