import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskItemLightComponent } from './task-item-light.component';

describe('TaskItemLightComponent', () => {
  let component: TaskItemLightComponent;
  let fixture: ComponentFixture<TaskItemLightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskItemLightComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskItemLightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
