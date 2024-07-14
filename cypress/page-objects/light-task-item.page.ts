import {ButtonElement} from "./button-element.page";

export class LightTaskItem {
  private readonly dataTestId: string | undefined;
  private planTaskButton = new ButtonElement('plan-task-button');
  private removeTaskButton = new ButtonElement('remove-task-button');

  constructor(index: number | null,
              private element: Cypress.Chainable<JQuery<HTMLElement>> | null = null) {
    if (index != null)
      this.dataTestId = `light-task-item-${index}`;
  }

  planTask(): void {
    cy.get(`[data-testid=${this.dataTestId}]`).within(e => {
      this.planTaskButton.click();
    });
  }

  isPlanTaskBtnDisabled(): void {
    const element = !this.element ? cy.get(`[data-testid=${this.dataTestId}]`) : this.element
    element.within(e => {
      this.planTaskButton.isDisabled();
    });
  }

  hasText(text: string): void {
    if (this.element) {
      this.element.within(e => {
        cy.get('[data-testid="task-description"]').should('contain.value', text);
      });
    } else {
      cy.shouldContainsText(this.dataTestId, text);
    }
  }
}
