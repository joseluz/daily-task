import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaySelectorComponent } from './day-selector.component';
import { render, RenderResult } from "@testing-library/angular";
import userEvent from "@testing-library/user-event";
import { addDays } from 'date-fns';

describe('DaySelectorComponent', () => {
  let renderResult: RenderResult<DaySelectorComponent>;

  beforeEach(async () => {
    renderResult = await render(DaySelectorComponent, {
      imports: [
        DaySelectorComponent
      ]
    })
  });

  it('should notify change when user clicks at NextDay btn', async () => {
    const component = renderResult.fixture.componentInstance;
    const currentDateChange = jest.spyOn(component.currentDateChange, 'emit');
    const nextDay = addDays(component.currentDate, 1);

    const user = userEvent.setup();

    const nextDayBtn = renderResult.getByTestId('next-day-button');
    await user.click(nextDayBtn);
    expect(currentDateChange).toHaveBeenCalledWith(nextDay);
  });

  it('should notify change when user clicks at PreviousDay btn', async () => {
    const component = renderResult.fixture.componentInstance;
    const currentDateChange = jest.spyOn(component.currentDateChange, 'emit');
    const previousDay = addDays(component.currentDate, -1);

    const user = userEvent.setup();

    const previousDayBtn = renderResult.getByTestId('previous-day-button');
    await user.click(previousDayBtn);
    expect(currentDateChange).toHaveBeenCalledWith(previousDay);
  });
});
