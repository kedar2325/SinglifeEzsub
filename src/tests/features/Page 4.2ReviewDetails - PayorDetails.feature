Feature: Review Details - Payer Details
@e2e @NewQuatation
  Scenario: Valid Payer Details
  Given user able to view questions
    When user selects yes option
    And user selects source of wealth
    And user selects source of funds
    And user click on next
    Then user validate the initial premium payment text