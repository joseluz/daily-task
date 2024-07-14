import {HomePage} from "../page-objects/home.page";

describe('Home Test', () => {
  const homePage = new HomePage();

  beforeEach(() => {
  });

  it('Should be empty on Previous day', () => {
    homePage.visit();
    homePage.dateNavigator.previousDayButton.click();
    homePage.taskList.isEmpty();
  });

  it('Should not be able to add twice the same existing Task', () => {
    homePage.visit();
    homePage.selectTaskButton.click();
    const taskItem = homePage.existingTaskPanel.get(0);
    taskItem.planTask();
    taskItem.isPlanTaskBtnDisabled();
  });

  it('Should add new task in the selection option AND this option must be disabled', () => {
    homePage.visit();
    homePage.selectTaskButton.click();
    homePage.existingTaskPanel.count(2);
    homePage.createTaskButton.click();
    const taskItem = homePage.taskList.get(0);
    const text='Fill Water Bottles';
    taskItem.type(text);
    const simpleTaskItem = homePage.existingTaskPanel.getLast();
    simpleTaskItem.hasText(text);
    simpleTaskItem.isPlanTaskBtnDisabled();
  });
})
