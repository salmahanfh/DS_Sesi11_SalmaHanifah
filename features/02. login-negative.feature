@login
Feature: Swag Labs - Login - Negative

@negative_locked_out
  Scenario Outline: As a locked_out_user, I should get error message
    Given Salma is on the login page
    When Salma login with "locked_out_user" credential
    Then Salma should see error "Epic sadface: Sorry, this user has been locked out."