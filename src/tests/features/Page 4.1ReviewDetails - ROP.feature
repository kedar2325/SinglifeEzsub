Feature: 4.1.Review Details - Replacement of policies
@e2e @2ndAssured
  Scenario: Valid ROP
    Given user able to view ques
    When user selects Yes or No option
    And user clicks next
    And user selects LA Yes or No option
    Then user validate the payer details text