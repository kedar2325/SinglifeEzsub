Feature: Review Details - Replacement of policies
@e2e
  Scenario: Valid ROP
    Given user able to view ques
    When User selects Yes option
    And user clicks next
    Then user validate the payer details text