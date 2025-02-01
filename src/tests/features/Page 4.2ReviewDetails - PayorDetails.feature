Feature: 4.2.Review Details - Payer Details
@e2e @2ndAssured
  Scenario: Valid Payer Details
    Given user able to view questions
    When user selects source of wealth
    And user selects source of funds
    And user click on next
    Then user validate the initial premium payment text