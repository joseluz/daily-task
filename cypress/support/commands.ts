/// <reference types="cypress" />

Cypress.Commands.add('clickOn', (...values: Array<string>) => {
  let base = '';
  for (const value of values) {
    base = `${base} [data-testid="${value}"]`;
  }
  cy.get(base).click();
});

Cypress.Commands.add('shouldBeVisible', (...values: Array<string>) => {
  let base = '';
  for (const value of values) {
    base = `${base} [data-testid="${value}"]`;
  }
  cy.get(base).should('be.visible');
});

Cypress.Commands.add('shouldNotBeVisible', (...values: Array<string>) => {
  let base = '';
  for (const value of values) {
    base = `${base} [data-testid="${value}"]`;
  }
  cy.get(base).should('not.be.visible');
});

Cypress.Commands.add(
  'shouldHaveClass',
  (className: string, ...values: Array<string>) => {
    let base = '';
    for (const value of values) {
      base = `${base} [data-testid="${value}"]`;
    }
    cy.get(base).should('have.class', className);
  },
);

Cypress.Commands.add(
  'shouldNotHaveClass',
  (className: string, ...values: Array<string>) => {
    let base = '';
    for (const value of values) {
      base = `${base} [data-testid="${value}"]`;
    }
    cy.get(base).should('not.have.class', className);
  },
);

Cypress.Commands.add('shouldBeDisabled', (...values: Array<string>) => {
  let base = '';
  for (const value of values) {
    base = `${base} [data-testid="${value}"]`;
  }
  cy.get(base).should('be.disabled');
});

Cypress.Commands.add('shouldNotBeDisabled', (...values: Array<string>) => {
  let base = '';
  for (const value of values) {
    base = `${base} [data-testid="${value}"]`;
  }
  cy.get(base).should('not.be.disabled');
});

Cypress.Commands.add('shouldExist', (...values: Array<string>) => {
  let base = '';
  for (const value of values) {
    base = `${base} [data-testid="${value}"]`;
  }
  cy.get(base).should('exist');
});

Cypress.Commands.add('shouldNotExist', (...values: Array<string>) => {
  let base = '';
  for (const value of values) {
    base = `${base} [data-testid="${value}"]`;
  }
  cy.get(base).should('not.exist');
});

Cypress.Commands.add('shouldBeUnchecked', (...values: Array<string>) => {
  let base = '';
  for (const value of values) {
    base = `${base} [data-testid="${value}"]`;
  }
  cy.get(base).should('not.be.checked');
});

Cypress.Commands.add('shouldBeChecked', (...values: Array<string>) => {
  let base = '';
  for (const value of values) {
    base = `${base} [data-testid="${value}"]`;
  }
  cy.get(base).should('be.checked');
});

Cypress.Commands.add('shouldHaveValue', (value: string, ...testId: Array<string>) => {
  let base = '';
  for (const id of testId) {
    base = `${base} [data-testid="${id}"]`;
  }
  cy.get(base).should('have.value', value);
});

Cypress.Commands.add('shouldHaveText', (value: string, ...testId: Array<string>) => {
  let base = '';
  for (const id of testId) {
    base = `${base} [data-testid="${id}"]`;
  }
  cy.get(base).should('have.text', value.trim());
});

Cypress.Commands.add('shouldContainsText', (value: string, ...testId: Array<string>) => {
  let base = '';
  for (const id of testId) {
    base = `${base} [data-testid="${id}"]`;
  }
  cy.get(base).should('contain.text', value.trim());
});
