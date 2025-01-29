Feature: Declaration - Client Acknowledgement
@e2e @Third-party
  Scenario: Valid Payer Details
    Given user able to view terms
    When user selects terms option
    And user selects e-documents option no
    # And user enter contact details
    Then user click on next in CA