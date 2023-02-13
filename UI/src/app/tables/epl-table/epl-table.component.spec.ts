import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EplTableComponent } from './epl-table.component';

describe('EplTableComponent', () => {
  let component: EplTableComponent;
  let fixture: ComponentFixture<EplTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EplTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EplTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
