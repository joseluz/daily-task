export class TaskList {
  private placeholderTestId = 'no-tasks-planned-placeholder';

  isEmpty(): void {
    cy.shouldBeVisible(this.placeholderTestId)
  }
}
