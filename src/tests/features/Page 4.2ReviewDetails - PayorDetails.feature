Feature: Review Details - Payer Details
@e2e
  Scenario: Valid Payer Details
    Given User able to view ques
    When User selects Yes option
    And User Selects Source of Wealth
    And User Selects Source of Funds
    And User Click on Next
    Then User validate the Initial Premium Payment text