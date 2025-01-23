Feature: Application - Review Details
@e2e
  Scenario: Review Details
    Given User Saves the Quotation
    When User clicks the Proceed to apply button
    And User navigates to Review Detials page 
    And User completes the mandatory details on the Review Details page 
    And User clicks the Next button to navigate to the Underwriting page
    And User enters values in the Height and Weight field on Underwriting Questions page
    Then User validates the Underwriting Questions and proceeds with the appropriate options