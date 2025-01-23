Feature: Product Selection - Quotation

  @e2e
  Scenario: Select the Singlife Steadypay Saver
    Given User searches for the product in the Product Selection search box
    When User selects the required product from the Product List
    And User clicks the Next button
    And User selects the Policy Term from the Policy Term dropdown
    And User enters the Sum Assured value in the Sum Assured field
    Then User should select the appropriate rider on the Rider Selection page
