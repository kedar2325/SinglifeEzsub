Feature: 4.1.Review Details - Replacement of policies
@e2e @2ndAssured
  Scenario: Valid ROP
    Given user able to see ROP page with product
    When user completes assured details
    And user completes second assured details
    And user clicks next to move payer details page
    Then user validate the payer details text
  