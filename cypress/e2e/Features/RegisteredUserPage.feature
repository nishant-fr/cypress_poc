Feature: Regustered user information modification page related tests

    Scenario: Successful modification of information for a registered user with valid data
        Given the user is on the login page
        When the user enters a valid email and password
        And clicks the "LOGIN" button
        Then the user should be redirected to the homepage
        When the user enters the following values to modify the profile
            | firstName | lastName | emailId   | phoneNo    | ssnNo       | bloodType | sex    | dob        | physicianFirstName | physicianLastName | physicianTitle | careSiteName | careSiteAddress |
            | random    | random   | app@testing.com | 0198653223 | 21656369563 | O+        | Female | 06/06/2001 | random             | random            | Prof.          | testSite     | 6 rue de Paris  |
        And the user clicks the "Update Profile" button in the user profile page
        Then the user should see a message 'Profile updated successfully'

    Scenario: First Name field - Invalid first name modification error handling
        Given the user is on the login page
        When the user enters a valid email and password
        And clicks the "LOGIN" button
        Then the user should be redirected to the homepage
        When the user modifies the first name field to 'T'
        And the user clicks the "Update Profile" button in the user profile page
        Then the user should see an error message '"firstName" length must be at least 2 characters long'

Scenario: Last Name field - Invalid last name modification error handling
    Given the user is on the login page
    When the user enters a valid email and password
    And clicks the "LOGIN" button
    Then the user should be redirected to the homepage
    When the user modifies the last name field to 'T'
    And the user clicks the "Update Profile" button in the user profile page
    Then the user should see an error message '"lastName" length must be at least 2 characters long'


Scenario: Email field - Invalid email modification error handling
    Given the user is on the login page
    When the user enters a valid email and password
    And clicks the "LOGIN" button
    Then the user should be redirected to the homepage
    When the user modifies the email field to 'xyz@xyz'
    And the user clicks the "Update Profile" button in the user profile page
    Then the user should see an error message '"email" must be a valid email'

Scenario: Phone number field - Invalid phone number modification error handling
    Given the user is on the login page
    When the user enters a valid email and password
    And clicks the "LOGIN" button
    Then the user should be redirected to the homepage
    When the user modifies the phone number field to '019865322a'
    And the user clicks the "Update Profile" button in the user profile page
    Then the user should see an error message '"phone" with value "019865322a" fails to match the required pattern: /^[0-9]+$/'

Scenario: Usual Physician First Name field - Invalid first name of physician modification error handling
    Given the user is on the login page
    When the user enters a valid email and password
    And clicks the "LOGIN" button
    Then the user should be redirected to the homepage
    When the user modifies the first name of physician field to 'T'
    And the user clicks the "Update Profile" button in the user profile page
    Then the user should see an error message '"usualPhysician.firstName" length must be at least 2 characters long'

Scenario: Usual Physician Last Name field - Invalid last name of physician modification error handling
    Given the user is on the login page
    When the user enters a valid email and password
    And clicks the "LOGIN" button
    Then the user should be redirected to the homepage
    When the user modifies the last name of physician field to 'T'
    And the user clicks the "Update Profile" button in the user profile page
    Then the user should see an error message '"usualPhysician.lastName" length must be at least 2 characters long'

Scenario: Usual Care Site Name field - Invalid usual care site name modification error handling
    Given the user is on the login page
    When the user enters a valid email and password
    And clicks the "LOGIN" button
    Then the user should be redirected to the homepage
    When the user modifies the usual care site name field to 'T'
    And the user clicks the "Update Profile" button in the user profile page
    Then the user should see an error message '"usualCareSite.name" length must be at least 2 characters long'

Scenario: Usual Care Site Address field - Invalid usual care site address modification error handling
    Given the user is on the login page
    When the user enters a valid email and password
    And clicks the "LOGIN" button
    Then the user should be redirected to the homepage
    When the user modifies the usual care site address field to 'T'
    And the user clicks the "Update Profile" button in the user profile page
    Then the user should see an error message '"usualCareSite.address" length must be at least 5 characters long'

Scenario: Logout from user profile page
    Given the user is on the login page
    When the user enters a valid email and password
    And clicks the "LOGIN" button
    Then the user should be redirected to the homepage
    When the user clicks the "Logout" button in the user profile page
    Then upon successfull registration the user is redirected to the login page
