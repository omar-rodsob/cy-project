Feature:  Acess to home and do things
  As a User
  I want to acces to my home
  So i can acces to my things

  @demo
  Scenario: User accessing to home
    Given The User See His HomePage

  @demo
  Scenario: User Click in anchor menu
    Given The User See His HomePage
    Then clicks the friends tab
    Then clicks the mine tab 

  @demo
  Scenario: User Click Range
    Given The User See His HomePage
    Then click range button
    Then move right range