@cartpage
Feature: Swag Lab - Cart Page

Background: User should go to the payment ceheckout page
  Given Salma is on the login page
  When Salma login with "standard_user" credential
  And Salma should see home page
  And Salma click on add to cart
  And Salma should see the product is added to cart
  And Salma click on icon chart
  Then Salma should see cart page
  
  @positive_checkout
  Scenario Outline: As a standard_user , I want to go to the payment checkout page
    When Salma click on button checkout
    And Salma should see payment checkout page
    And Salma fill payment field with "firstname" and "username" and "zipcode" credential
    Then Salma should see payment detail page
