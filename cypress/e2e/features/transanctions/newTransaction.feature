Feature:  Create new Transaction
  As a User
  I want to access to a new Transaction page
  So i can create a new transaction
  @demo
  Scenario: User select a user to create a transaction
    Given The user accessing to new transaction page
    When The user select another user from the list
    When Fill the ammount and comments info
    When Click Pay Button
    Then The transaction  is created it