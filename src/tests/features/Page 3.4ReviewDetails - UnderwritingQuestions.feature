Feature:Review Details - Underwriting Questions
@e2e @Third-party
  Scenario: complete the underwriting tab
  Given user able to reach the underwriting tab
  When user able to fill the height and weight fields
  And user click the calculate button
  And user answer underwriting Questions
  Then user click the next button to go underwriting page