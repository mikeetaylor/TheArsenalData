import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Menu2930Component } from './menu2930.component';

describe('Menu2930Component', () => {
  let component: Menu2930Component;
  let fixture: ComponentFixture<Menu2930Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Menu2930Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Menu2930Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
