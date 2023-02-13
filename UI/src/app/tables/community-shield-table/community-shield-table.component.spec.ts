import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunityShieldTableComponent } from './community-shield-table.component';

describe('CommunityShieldTableComponent', () => {
  let component: CommunityShieldTableComponent;
  let fixture: ComponentFixture<CommunityShieldTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommunityShieldTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunityShieldTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
