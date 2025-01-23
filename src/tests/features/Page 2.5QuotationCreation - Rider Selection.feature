Feature: Rider Selection - Quotation

  @e2e
  Scenario: select the riders
  Given user able to view the available riders
  When user select the riders in the rider selection page
  And user click the premium calculate button for the selected rider
  And user click the next button
  Then user validate the premium calculated for the selected riders