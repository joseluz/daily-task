import {LightTaskItem} from "./light-task-item.page";

export class AllTaskPanel {

  get(index: number): LightTaskItem {
    return new LightTaskItem(index);
  }
}
