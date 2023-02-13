import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmericanChallengeCupTableComponent } from './american-challenge-cup-table.component';

describe('AmericanChallengeCupTableComponent', () => {
  let component: AmericanChallengeCupTableComponent;
  let fixture: ComponentFixture<AmericanChallengeCupTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmericanChallengeCupTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmericanChallengeCupTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
