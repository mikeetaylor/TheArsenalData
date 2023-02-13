import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperCupTableComponent } from './super-cup-table.component';

describe('SuperCupTableComponent', () => {
  let component: SuperCupTableComponent;
  let fixture: ComponentFixture<SuperCupTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperCupTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperCupTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
