import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Menu2829Component } from './menu2829.component';

describe('Menu2829Component', () => {
  let component: Menu2829Component;
  let fixture: ComponentFixture<Menu2829Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Menu2829Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Menu2829Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
