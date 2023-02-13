import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UclTableComponent } from './ucl-table.component';

describe('UclTableComponent', () => {
  let component: UclTableComponent;
  let fixture: ComponentFixture<UclTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UclTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UclTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
