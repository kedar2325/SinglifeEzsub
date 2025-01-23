Feature: Declaration - Client Acknowledgement
@e2e
  Scenario: Valid Payer Details
    Given user able to view terms
    When user selects terms option
    And user selects e-documents option
    And user enter contact details
    And user click on next
    Then user validate the text declaration of politically