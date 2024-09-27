Feature: Login Functionality

Scenario Outline: User tries to login
  Given the user is on the login screen
  When the user enters "<username>" and "<password>"
  And clicks the login button
  Then the login should be "<expectedOutcome>"
  And the user should see the error message "<errorMessage>"

Examples:
  | username       | password       | expectedOutcome | errorMessage                                                |
  | standard_user  | secret_sauce   | success         |                                                             |
  | user2          | wrongpass      | failure         | Username and password do not match any user in this service.|
  |                | pass1          | failure         | Username is required                                        |
  | standard_user  |                | failure         | Password is required                                        |
