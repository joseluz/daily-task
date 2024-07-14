import {TaskItem} from "./task-item.page";

export class TaskList {
  private placeholderTestId = 'no-tasks-planned-placeholder';

  isEmpty(): void {
    cy.shouldBeVisible(this.placeholderTestId)
  }

  get(index: number): TaskItem {
    return new TaskItem(index);
  }
}
