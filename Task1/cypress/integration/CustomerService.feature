
Feature: Customer Service Feature

    Scenario: Verify that the user can search on Customer Service Page
        Given user navigates to Amazon Home screen
        When user clicks on hamburger menu
        And User clicks the Customer Service option
        And User types "where is My Stuff" in the search bar
        Then "Where's My Stuff?" is displayed on the screen
