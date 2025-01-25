Feature: Confirmation - Signing Method - Product Illustration and Product Summary
@e2e @NewQuatation
  Scenario: Select Signing method and product illustration
    Given user able to view the signing method
    When user selects the preferred signing method
    And user preview the PDF of Product Illustration and Product Summary
    Then user verify the success message 