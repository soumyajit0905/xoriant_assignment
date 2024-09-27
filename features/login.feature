Feature: Login Functionality

Scenario Outline: User tries to login
  Given the user is on the login screen
  When the user enters "<username>" and "<password>"
  And clicks the login button
  Then the login should be "<expectedOutcome>"

Examples:
  | username       | password       | expectedOutcome |
  | standard_user  | secret_sauce   | success         |
  | user2          | wrongpass      | failure         |
  |                | pass1          | failure         |
  | standard_user  |                | failure         |