import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsiaEliteCupTableComponent } from './asia-elite-cup-table.component';

describe('AsiaEliteCupTableComponent', () => {
  let component: AsiaEliteCupTableComponent;
  let fixture: ComponentFixture<AsiaEliteCupTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsiaEliteCupTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsiaEliteCupTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
