import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeagueCupTableComponent } from './league-cup-table.component';

describe('LeagueCupTableComponent', () => {
  let component: LeagueCupTableComponent;
  let fixture: ComponentFixture<LeagueCupTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeagueCupTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeagueCupTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
