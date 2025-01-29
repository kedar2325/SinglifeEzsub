Feature: Login functionality
@e2e  @2ndAssured
  Scenario: Valid login
    Given User launch the login url
    When User enters the valid loginID and Password
    And User clicks the Login button
    Then User validate the home page text
 

    