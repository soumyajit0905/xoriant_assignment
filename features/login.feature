Feature: Login Functionality

Scenario Outline: User tries to login
  Given the user is on the login screen
  When the user enters "<username>" and "<password>"
  And clicks the login button
  Then the login should be "<expectedOutcome>"

Examples:
  | username  | password  | expectedOutcome |
  | user1     | pass1     | success         |
  | user2     | wrongpass | failure         |
  |           | pass1     | failure         |
  | user1     |           | failure         |
