export class TaskItem {
  private dataTestId: string;
  private descriptionTestId = 'task-item-description';

  constructor(index: number) {
    this.dataTestId = `task-item-${index}`;
  }


  type(text: string): void {
    cy.get(`[data-testid=${this.dataTestId}] [data-testid=${this.descriptionTestId}]`).type(text);
  }
}
