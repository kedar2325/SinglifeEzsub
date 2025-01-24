Feature: Quotation Creation - Life Insurance Plan Selection
 Background:  Scenario: Valid login
    Given User launch the login url
    When User enters the valid loginID and Password
    And User clicks the Login button
    Then User validate the home page text

@e2e @NewQuatation
  Scenario: Select Life Insurance plan selection and Apply
    Given user able to view the new quotation
    And user clicks new quotation as "Life Insurance"
    And user selects life insurance 
    Then user clicks yes proceed

