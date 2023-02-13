import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaContinentalCupTableComponent } from './sa-continental-cup-table.component';

describe('SaContinentalCupTableComponent', () => {
  let component: SaContinentalCupTableComponent;
  let fixture: ComponentFixture<SaContinentalCupTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaContinentalCupTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaContinentalCupTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
