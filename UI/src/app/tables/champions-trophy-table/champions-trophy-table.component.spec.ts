import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChampionsTrophyTableComponent } from './champions-trophy-table.component';

describe('ChampionsTrophyTableComponent', () => {
  let component: ChampionsTrophyTableComponent;
  let fixture: ComponentFixture<ChampionsTrophyTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChampionsTrophyTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChampionsTrophyTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
