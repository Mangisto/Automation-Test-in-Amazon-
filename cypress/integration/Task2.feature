Feature: Task 2

    Scenario: Verify that the user can select Amazon Devices
        Given user navigates to Amazon Home screen
        When user clicks on Today's Deals button
        And user clicks on Amazon Devices filter
        Then clear button should be displayed on the screen
        When user clicks on the clear button
        Then Amazon Devices button should be unchecked


    Scenario: Verify the user can change the color of a product
        Given user navigates to Scissors screen
        When The Scissors image is displayed on the screen
        And user clicks on Red, Black, Blue option
        Then text color should be changed to "Red, Black, Blue"
    
    Scenario: Verify that user can add Scissors to the cart
        Given user navigates to a specific Scissors screen
        When user clicks on Add to Cart button
        Then The text "Added to Cart" is displayed on the screen
        And user removes Scissors from the cart