import { Injectable } from "@angular/core";
import { Dexie, Table } from "dexie";
import { TaskDoc } from "./docs/task.doc";

@Injectable({
  providedIn: 'root'
})
export class AppDB extends Dexie {
  tasks!: Table<TaskDoc, number>;
  private static dbName = 'daily-task-db';

  constructor() {
    super(AppDB.dbName);
    this.version(3)
      .stores({
        tasks: '++id'
      });
    this.on('populate', () => this.initialSeed());
  }

  async initialSeed(): Promise<void> {

  }
}
