import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RosterTable20292030Component } from './roster-table20292030.component';

describe('RosterTable20292030Component', () => {
  let component: RosterTable20292030Component;
  let fixture: ComponentFixture<RosterTable20292030Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RosterTable20292030Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RosterTable20292030Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
