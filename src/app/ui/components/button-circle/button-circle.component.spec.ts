import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonCircleComponent } from './button-circle.component';

describe('ButtonCircleComponent', () => {
  let component: ButtonCircleComponent;
  let fixture: ComponentFixture<ButtonCircleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonCircleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonCircleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
