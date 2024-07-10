export class Task {
  description: string | undefined;
  isPlanned = false;
  isComplete = false;
  scheduleFor: Date | undefined;
  difficultyLevel: DifficultyLevel | undefined;

  constructor(init?: Partial<Task>) {
    Object.assign(this, init);
  }
}

export enum DifficultyLevel {
  VeryLow = 1,
  Low = 2,
  Medium = 3,
  Hard = 4,
  VeryHard = 5,
}
