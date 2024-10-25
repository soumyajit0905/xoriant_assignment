Feature: Login Functionality

Scenario Outline: User tries to login
  Given the user is on the login screen
  When the user enters "<username>" and "<password>"
  And clicks the login button
  Then the login should be "<expectedOutcome>"
  And the user should see the error message "<errorMessage>"

Examples:
  | username           | password       | expectedOutcome | errorMessage                                                |
  | standard_user      | secret_sauce   | success         |                                                             |
  | 1@2.com            | f-o-o          | failure         | Username and password do not match any user in this service.|
  |                    |                | failure         | Username is required                                        |
  | bob@example.com    |                | failure         | Password is required                                        |
  | alice@example.com  | 10203040       | failure         | Username and password do not match any user in this service.|