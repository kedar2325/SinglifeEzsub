Feature: Product Details - Quotation

  @e2e  @NewQuatation
  Scenario: Enter the  product details 

    Given user able to view the mandatory fields in product details page
    When user able to select the policy term from the policy term dropdown 
    And user enter the sum sssured value in the sum asssured field
    And user click the calculate button for the premium calculation
    Then user should validate the premium amount calculated