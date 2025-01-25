Feature: Confirmation - Complete the E-Signature
@e2e
  Scenario: Complete the E-Signature in others field
    Given user able to view the others tab in document signing page
    When user able to preview and sign in the signature form
    And user able to preview and sign in the VISA/MasterCard Authorisation Form
    Then user clicks next button