Feature: Review Details - Quotation1
@e2e
  Scenario: Valid Payer Details
    Given User able to view payment method
    When User selects Payment method
    And User Selects Subsequent Premium Payment
    And User Click on Next
    Then User validate the on your terms text