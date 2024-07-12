export class ButtonElement {
  private internalDataTestId = 'button-element';

  constructor(private testId: string) {
  }

  click(): void {
    cy.clickOn(this.testId, this.internalDataTestId);
  }

  isDisabled() {
    cy.shouldBeDisabled(this.testId, this.internalDataTestId);
  }
}
