import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DinnerRollsComponent } from './dinner-rolls.component';

describe('DinnerRollsComponent', () => {
  let component: DinnerRollsComponent;
  let fixture: ComponentFixture<DinnerRollsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DinnerRollsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DinnerRollsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
