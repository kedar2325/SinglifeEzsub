Feature: 6.2.Confirmation - Supporting Documents
@e2e @2ndAssured
  Scenario: Complete the E-Signature in others field
    Given user able to view the supporting docs
    When user able to upload proof of id
    And user able to upload proof of address
    And user able to upload proof of mas
    Then user click on next btn on doc