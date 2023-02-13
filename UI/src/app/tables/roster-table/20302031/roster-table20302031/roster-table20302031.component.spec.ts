import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RosterTable20302031Component } from './roster-table20302031.component';

describe('RosterTable20302031Component', () => {
  let component: RosterTable20302031Component;
  let fixture: ComponentFixture<RosterTable20302031Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RosterTable20302031Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RosterTable20302031Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
