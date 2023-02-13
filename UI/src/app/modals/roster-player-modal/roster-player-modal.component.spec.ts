import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RosterPlayerModalComponent } from './roster-player-modal.component';

describe('RosterPlayerModalComponent', () => {
  let component: RosterPlayerModalComponent;
  let fixture: ComponentFixture<RosterPlayerModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RosterPlayerModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RosterPlayerModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
