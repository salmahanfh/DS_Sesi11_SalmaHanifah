@homepage
Feature: Swag Lab - Home Page

Background: User should go to the cart page
  Given Salma is on the login page
  When Salma login with "standard_user" credential
  Then Salma should see home page

  @positive_addcart
  Scenario Outline: As a standard_user , I want to go add product
    When Salma click on add to cart
    And Salma should see the product is added to cart
    And Salma click on icon chart
    Then Salma should see cart page
