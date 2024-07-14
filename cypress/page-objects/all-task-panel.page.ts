import {LightTaskItem} from "./light-task-item.page";

export class AllTaskPanel {

  get(index: number): LightTaskItem {
    return new LightTaskItem(index);
  }

  count(qty: number): void {
    cy.get('[data-testid="all-tasks-panel"] dt-task-item-light').should('have.length', qty);
  }

  getLast(): LightTaskItem {
    const element = cy.get('[data-testid="all-tasks-panel"] dt-task-item-light').last();
    return new LightTaskItem(null, element);
  }
}
