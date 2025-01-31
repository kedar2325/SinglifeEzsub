Feature: 4.Quotation Creation - Select Nationality and Residence
@e2e @2ndAssured @Qoutation
  Scenario: Select Nationality and Residence 
  Given user selects Nationality from the dropdown
  When user selects country of residence 
  And user selects residence status from the dropdown
  Then user verify residency status should be displayed 



