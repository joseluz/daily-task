// ***********************************************************
// This example support/e2e.ts is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands';

// Alternatively you can use CommonJS syntax:
// require('./commands')
declare global {
  namespace Cypress {
    interface Chainable {
      clickOn(...values: Array<string>): Chainable<Element>;

      shouldBeVisible(...values: Array<string>): Chainable<Element>;

      shouldNotBeVisible(...values: Array<string>): Chainable<Element>;

      shouldHaveClass(className: string, ...values: Array<string>): Chainable<Element>;

      shouldNotHaveClass(className: string, ...values: Array<string>): Chainable<Element>;

      shouldBeDisabled(...values: Array<string>): Chainable<Element>;

      shouldNotBeDisabled(...values: Array<string>): Chainable<Element>;

      shouldExist(...values: Array<string>): Chainable<Element>;

      shouldNotExist(...values: Array<string>): Chainable<Element>;

      shouldBeUnchecked(...values: Array<string>): Chainable<Element>;

      shouldBeChecked(...values: Array<string>): Chainable<Element>;

      shouldHaveValue(value: string, ...values: Array<string>): Chainable<Element>;

      shouldHaveText(value: string, ...values: Array<string>): Chainable<Element>;

      shouldContainsText(value: string, ...values: Array<string>): Chainable<Element>;
    }
  }
}
