Feature: 2.2Quotation-AssuredDetails
@e2e @2ndAssured @Qoutation
  Scenario: Select Nationality and Residence 
  Given user selects Nationality from the dropdown
  When user selects country of residence 
  And user selects residence status from the dropdown
  And user verify residency status should be displayed 
  Then user completes the second Assured Details


