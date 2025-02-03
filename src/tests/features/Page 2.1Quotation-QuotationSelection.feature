Feature: 2.1Quotation-QuotationSelection
@e2e @2ndAssured @Qoutation
  Scenario: Select Apply for Life Insurance plan selection
  Given user clicks customer selection for quotation
  When user clicks new EzSub profile
  And user provides quotation details
  Then user verify the DOB is visible 

