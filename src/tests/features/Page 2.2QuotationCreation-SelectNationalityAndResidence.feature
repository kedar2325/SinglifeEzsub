Feature: Quotation Creation - Select Nationality and Residence
@e2e
  Scenario: Select Nationality and Residence 
  Given user selects Nationality from the dropdown
  When user selects country of residence and residence status from the dropdown
  And user clicks next
  Then verify the life assured logo changed to green color



