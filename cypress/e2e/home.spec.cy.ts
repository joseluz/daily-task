import {HomePage} from "../page-objects/home.page";

describe('Home Test', () => {
  const homePage = new HomePage();

  beforeEach(() => {});

  it('Should be empty on Previous day', ()=>{
    homePage.visit();
    homePage.dateNavigator.previousDayButton.click();
    homePage.taskList.isEmpty();
  });

  it('Should not be able to add twice the same existing Task', ()=>{
    homePage.visit();
    homePage.selectTaskButton.click();
    const taskItem = homePage.existingTaskPanel.get(0);
    taskItem.planTask();
    taskItem.isPlanTaskBtnDisabled();
  });
})
