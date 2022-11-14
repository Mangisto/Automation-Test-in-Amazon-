/// <reference types="cypress" />
const cucumber = require('cypress-cucumber-preprocessor').default
const allureWriter = require('@shelex/cypress-allure-plugin/writer')
/**
 * @type {Cypress.PluginConfig}
 */
module.exports = async (on,config) => {
  on('file:preprocessor', cucumber(), 'uncaught:exception', (err, runnable) => {
    return false
  })
  allureWriter(on, config)
  on('task', {
  })
  return config
}