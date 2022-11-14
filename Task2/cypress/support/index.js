// ***********************************************************
// This example support/index.js is processed and
// Loaded automatically before your test files.
//
// This is a great place to put global configuration and
// Behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// Automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

import './commands'
import '@shelex/cypress-allure-plugin'
import 'cypress-real-events/support'

Cypress.on('uncaught:exception', (err) => {
  console.log(err)
  return false
})
