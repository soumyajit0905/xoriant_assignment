Feature: Login Functionality

Scenario Outline: User tries to login
  Given the user is on the login screen
  When the user enters "<username>" and "<password>"
  And clicks the login button
  Then the login should be "<expectedOutcome>"

Examples:
  | username           | password       | expectedOutcome |
  | standard_user      | secret_sauce   | success         |
  | 1@2.com            | f-o-o          | failure         |
  |                    |                | failure         |
  | bob@example.com    |                | failure         |
  | alice@example.com  | 10203040       | failure         |