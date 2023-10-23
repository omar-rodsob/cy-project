Feature:  Check transactions by date
  As a User
  I want to select dates from the calendar
  So i can have a list of transactions 
  @demo
  Scenario: User selecting a date range from the calendar
    Given The user select a date range
    Then The user see the transactions by dates selected