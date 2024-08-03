import { Injectable } from "@angular/core";
import { TaskStore } from "../store/task.store";
import { from, map, Observable } from "rxjs";
import { Task } from "../model/task";
import { TaskDoc } from "../store/docs/task.doc";

@Injectable({providedIn: 'root'})
export class TaskPersistence {
  constructor(private taskStore: TaskStore) {
  }

  getAll(): Observable<Array<Task>> {
    return from(this.taskStore.all())
      .pipe(
        map(tasks => tasks.map(t => new Task({description: t.description, id: t.id})))
      )
  }

  storeSingle(task: Task): Observable<Task> {
    return from(this.taskStore.storeSingle(new TaskDoc({description: task.description})))
      .pipe(
        map(taskId => {
          task.id = taskId;
          return task;
        })
      );
  }
}
