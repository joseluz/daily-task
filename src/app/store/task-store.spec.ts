import { TaskStore } from "./task.store";
import { TestBed } from "@angular/core/testing";
import { TaskDoc } from "./docs/task.doc";

global.structuredClone = (val) => JSON.parse(JSON.stringify(val));

describe('TaskStore tests', () => {
  let taskStore: TaskStore;

  beforeEach(() => {
    taskStore = TestBed.inject<TaskStore>(TaskStore);
  })

  it('Should have store', () => {
    expect(taskStore).toBeTruthy();
  });

  it('Should store and read tasks', () => {
    return taskStore.storeSingle(new TaskDoc({id: 12, description: 'peteca'}))
      .then(id => {
        expect(id).toBeTruthy();
        expect(id).toBeGreaterThan(0);
        return taskStore.all()
          .then(tasks => {
            expect(tasks).toBeTruthy();
            expect(tasks).toHaveLength(1);
            expect(tasks[0].description).toBe('peteca');
          });
      });
  })
})
