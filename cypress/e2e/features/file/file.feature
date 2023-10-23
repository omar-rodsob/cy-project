Feature:  Upload files
  As a User
  I want Upload Files
  So i can attach files

  @demo
  Scenario: User accessing to upload file
    Given The User have a file to upload
    Then Select the file
    Then The user click upload button
    Then the file is uploaded

Scenario: User accessing to upload file
    Given The User have a file to upload
    Then Select the files
    Then The user click upload button
    Then the files are uploaded

Scenario: User dragging files
    Given The User have a file to upload
    Then Drag the files
    Then The user click upload button
    Then the files are uploaded