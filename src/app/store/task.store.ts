import { AppDB } from "./db.context";
import { TaskDoc } from "./docs/task.doc";
import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})
export class TaskStore {
  constructor(private db: AppDB) {
  }

  storeSingle(task: TaskDoc): Promise<number> {
    return this.db.tasks.put(task);
  }

  async all(): Promise<Array<TaskDoc>> {
    return this.db.tasks.toArray();
  }
}
