Feature: Quotation Creation - Life Insurance Plan Selection
 
@e2e @NewQuatation
  Scenario: Select Life Insurance plan selection and Apply
    Given user login with Valid Credentials
    When user able to view the new quotation
    And user clicks new quotation as "LifeInsurance"
    And user selects life insurance 
    Then user clicks yes proceed

