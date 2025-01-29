Feature: Review Details - Quotation
@e2e @2ndAssured
  Scenario: Valid Payer Details
    Given user able to view payment method
    When user selects payment method
    And user selects subsequent premium payment
    And user click on Next
    Then user validate the on your terms text