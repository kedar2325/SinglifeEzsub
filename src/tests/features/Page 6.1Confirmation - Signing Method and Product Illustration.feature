Feature: Confirmation - Signing Method - Product Illustration and Product Summary
@e2e
  Scenario: Select Signing method and complete signature
    Given user able to view the signing method
    When user selects the preferred signing method
    And user preview the PDF of Product and success
    And user preview the PDF of App and success
    And user preview the PDF of Assured Signature and success
    And user preview the PDF of Credit Signature and success
    Then user click on next btn on signing