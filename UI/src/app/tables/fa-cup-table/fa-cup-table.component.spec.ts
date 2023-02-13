import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaCupTableComponent } from './fa-cup-table.component';

describe('FaCupTableComponent', () => {
  let component: FaCupTableComponent;
  let fixture: ComponentFixture<FaCupTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaCupTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FaCupTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
