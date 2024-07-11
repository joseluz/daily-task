import {Task} from "./task";

export class Daily {
  date: Date;
  tasks: Array<Task> = [];

  constructor(init?: Partial<Daily>) {
    Object.assign(this, init);
  }
}
