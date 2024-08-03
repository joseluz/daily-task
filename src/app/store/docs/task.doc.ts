export class TaskDoc {
  id: number;
  description: string | undefined;
  isPlanned = false;
  isComplete = false;
  scheduleFor: Date | undefined;
  // difficultyLevel: DifficultyLevel | undefined;
  comments: string | undefined;

  constructor(init?: Partial<TaskDoc>) {
    Object.assign(this, init);
  }
}
