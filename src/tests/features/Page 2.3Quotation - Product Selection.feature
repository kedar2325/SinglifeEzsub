Feature: 2.3Quotation - Product Selection

  @e2e @2ndAssured @Qoutation
  Scenario: Select the product 
    Given user search for the product in the product selection search box
    When user select the required product from the product list
    And user select the product from the search result
    And user click the next button
    Then user validate the searched product should be displayed