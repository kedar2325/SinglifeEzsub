Feature:1.2Quotation-InsurancePlanSelection

@e2e @2ndAssured @Qoutation
  Scenario: Select Life Insurance plan selection and Apply
    Given user able to view the new quotation
    And user clicks new quotation
    And user selects life insurance 
    Then user clicks yes proceed

