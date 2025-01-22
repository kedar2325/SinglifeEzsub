Feature: Review Details - Replacement of policies
@e2e
  Scenario: Valid ROP
    Given User able to view ques
    When User selects No option
    And User Clicks next
    Then User validate the Payer Details text