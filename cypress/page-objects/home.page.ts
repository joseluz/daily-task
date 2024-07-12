import {DateNavigator} from "./date-navigator.page";
import {TaskList} from "./task-list.page";
import {ButtonElement} from "./button-element.page";
import {AllTaskPanel} from "./all-task-panel.page";

export class HomePage {
  dateNavigator = new DateNavigator();
  taskList = new TaskList();
  selectTaskButton = new ButtonElement('select-task-button');
  createTaskButton = new ButtonElement('create-task-button');
  existingTaskPanel= new AllTaskPanel();

  visit(): void {
    cy.visit("/");
  }
}
