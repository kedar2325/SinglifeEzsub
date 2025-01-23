Feature:Review Details - Underwriting Questions
@e2e
  Scenario: complete the underwriting tab
  Given user able to reach the underwriting tab
  When user able to fill the height and weight fields
  And user click the calculate button
  And user able to see the newly generated underwriting Questions
  And user complete all the underwriting questions appropratiely
  And user click the next button
  Then user able to see the green logo in underwriting tab 