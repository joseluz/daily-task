import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DairyActivityPageComponent } from './dairy-activity.page.component';

describe('DairyActivityPageComponent', () => {
  let component: DairyActivityPageComponent;
  let fixture: ComponentFixture<DairyActivityPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DairyActivityPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DairyActivityPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
