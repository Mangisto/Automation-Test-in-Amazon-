///<reference types = "Cypress" >
import { ProductsPage } from '../../pagelocators/ProductsPage'

Given("user navigates to Amazon Home screen", () => {
    cy.visit("https://www.amazon.com/")
})

When("user clicks on Today's Deals button", () => {
    cy.get(ProductsPage.todayDealButton, { timeout: 10000 }).contains('Today\'s Deals').click({ force: true })
})

When("user clicks on Amazon Devices filter", () => {
    cy.get(ProductsPage.DevicesCheckbox).contains('Amazon Devices').siblings('input[type="checkbox"]').click({ force: true })
})

When("clear button should be displayed on the screen", () => {
    cy.get(ProductsPage.clearButton).contains('Clear').should('be.visible')
})

When("user clicks on the clear button", () => {
    cy.get(ProductsPage.clearFilterButton).click({ force: true })
})

When("Amazon Devices button should be unchecked", () => {
    cy.get(ProductsPage.DevicesCheckbox).contains('Amazon Devices').siblings('input[type="checkbox"]').should('not.be.checked')
})

Given("user navigates to Scissors screen", () => {
    cy.visit("https://www.amazon.com/Scissors-iBayam-Crafting-Scrapbooking-Knitting/dp/B07H3QKN2Z")
})

Given("user navigates to a specific Scissors screen", () => {
    cy.visit("https://www.amazon.com/Mr-Scissors-Decorative-Scrapbooking-Crafting/dp/B08F2SPQZR/ref=sr_1_4?c=ts&keywords=Craft+Scissors&qid=1665595702&qu=eyJxc2MiOiI2LjIwIiwicXNhIjoiNS40OCIsInFzcCI6IjUuMjAifQ%3D%3D&s=arts-crafts&sr=1-4&ts_id=689392011")
})

When("The Scissors image is displayed on the screen", () => {
    cy.get(ProductsPage.productImage).should('be.visible')
})

When("user clicks on Red, Black, Blue option", () => {
    cy.get(ProductsPage.colorButton).click({ force: true })
})

When("text color should be changed to {string}", (displayedColors) => {
    cy.get(ProductsPage.selectedColor, { timeout: 10000 }).should('contain', displayedColors)
})


When("user changes the country to {string}", (countryName) => {
    cy.get(ProductsPage.locationButton, { timeout: 10000 }).click({ force: true })
    cy.get(ProductsPage.countryListButton).select(countryName, { force: true })
    cy.get(ProductsPage.doneButton).click({ force: true })
    cy.wait(5000)
    cy.reload()
    cy.wait(2000)
})

When("user clicks on Add to Cart button", () => {
    cy.get(ProductsPage.addToCartButton, { timeout: 10000 }).click({ force: true })
    cy.wait(5000)
})

When("The text {string} is displayed on the screen", (textDisplayed) => {
    cy.contains(textDisplayed, { timeout: 10000 }).should('be.visible')
})

And("user removes Scissors from the cart", () => {
    cy.get('[id="nav-cart"]', { timeout: 10000 }).click({ force: true })
    cy.get('[data-action="delete"] input', { timeout: 10000 }).eq(0).click({force:true})
    cy.wait(2000)
})