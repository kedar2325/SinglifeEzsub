Feature: Review Details - Application Creation
@e2e @NewQuatation
  Scenario: Enter into the Application page
  Given user able to view the quotation summary page
  When user click the save quotation button
  And user click the proceed to apply button
  Then user should view the review details page