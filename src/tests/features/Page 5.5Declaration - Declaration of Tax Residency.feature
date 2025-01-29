Feature: Declaration - Declaration of Tax Residency
@e2e @Third-party
  Scenario: Declaration of Tax Residency
    Given user able to view declaration of tax residency
    When user selects tax resident in singapore yes
    And user enters tin number
    And user selects tax resident in other jurisdiction no
    And user checks the declaration
    Then user selects next