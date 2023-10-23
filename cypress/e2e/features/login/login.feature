Feature:  Visit Login
  As a User
  I want to acces to Real World
  So i can acces to my account

  @demo
  Scenario: Bad Login Real World App
    Given A User accesing Real World
    Then I type a wrong username 
    Then I type a password
    When Click the SIG IN button
    Then I recieve a error message
  
  Scenario: Login sucess
    Given A User accesing Real World
    Then I type a valid username 
    Then I type a valid password
    Then click in remember me checkbox
    When Click the SIG IN button Submit
    Then User will go to this homepage