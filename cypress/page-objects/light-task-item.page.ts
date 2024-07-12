import {ButtonElement} from "./button-element.page";

export class LightTaskItem {
  private dataTestId;
  private planTaskButton = new ButtonElement('plan-task-button');
  private removeTaskButton = new ButtonElement('remove-task-button');

  constructor(index: number) {
    this.dataTestId = `light-task-item-${index}`;
  }

  planTask(): void {
    cy.get(`[data-testid=${this.dataTestId}]`).within(e => {
      this.planTaskButton.click();
    });
  }

  isPlanTaskBtnDisabled(): void {
    cy.get(`[data-testid=${this.dataTestId}]`).within(e => {
      this.planTaskButton.isDisabled();
    });
  }
}
