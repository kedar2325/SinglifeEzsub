Feature: Quotation Creation - Life Insurance Plan Selection

@e2e
  Scenario: Select Life Insurance plan selection and Apply
    Given user able to view the new quotation
    And user clicks new quotation
    And user selects life insurance 
    Then user clicks yes proceed

