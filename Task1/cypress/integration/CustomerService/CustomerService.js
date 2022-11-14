///<reference types = "Cypress" >
import { customerService } from '../../pagelocators/customerService'

Given("user navigates to Amazon Home screen", () => {
    cy.visit("https://www.amazon.com/")
})

When("user clicks on hamburger menu", () => {
    cy.get(customerService.hamburgerMenu, { timeout: 10000 }).click({ force: true })
})

When("User clicks the Customer Service option", () => {
    cy.get(customerService.getMenuItems, { timeout: 10000 }).contains('Customer Service').scrollIntoView().click({ force: true })
})

When("User types {string} in the search bar", (typeString) => {
    cy.get(customerService.getSearchBar).type(typeString).type('{enter}')
})

When("{string} is displayed on the screen", () => {
    cy.get(customerService.getHelpContent, { timeout: 10000 }).should('contain', '')
})
