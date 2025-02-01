Feature: 3.3.Review Details - Life Assured
@e2e @2ndAssured
  Scenario: enter into the life assured
  Given user able to view the values in life assured tab
  When user able to fill the values in all mandatory fields
  And user able to complete the residential address and financial background
  Then user click the next button to go underwriting page
  