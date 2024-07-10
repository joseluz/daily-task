import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonDifficultyLevelComponent } from './button-difficulty-level.component';

describe('ButtonDifficultyLevelComponent', () => {
  let component: ButtonDifficultyLevelComponent;
  let fixture: ComponentFixture<ButtonDifficultyLevelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonDifficultyLevelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonDifficultyLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
