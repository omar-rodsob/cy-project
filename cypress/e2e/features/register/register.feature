Feature:  User Registration
  As a User
  I want to acces to signup
  So i can have an account in this demo

  @demo
  Scenario: Create a user
    Given A User accesing to signup
    Then I type a first name
    When I type a last name
    When I type a username
    When I type a password
    Then I confirm a password
    When I Click the SING UP button
    Then I access to my home page