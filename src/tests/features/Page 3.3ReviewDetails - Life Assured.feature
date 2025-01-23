Feature: Review Details - Life Assured
@e2e
  Scenario: enter into the life assured
  Given user able to view the values in life assured tab
  When user able to fill the values in all mandatory fields
  And user click the nex button
  Then user should validate the logo icon has changed to green colour