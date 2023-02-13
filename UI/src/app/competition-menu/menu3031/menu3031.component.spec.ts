import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Menu3031Component } from './menu3031.component';

describe('Menu3031Component', () => {
  let component: Menu3031Component;
  let fixture: ComponentFixture<Menu3031Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Menu3031Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Menu3031Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
