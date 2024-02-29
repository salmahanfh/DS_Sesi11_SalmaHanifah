@login
Feature: Swag Labs - Login - Positive

  @positive_standard
  Scenario Outline: As a standard_user, I want to login succesfully
    Given Salma is on the login page
    When Salma login with "standard_user" credential
    Then Salma should see home page
