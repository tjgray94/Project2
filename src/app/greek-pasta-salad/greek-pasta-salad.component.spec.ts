import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreekPastaSaladComponent } from './greek-pasta-salad.component';

describe('GreekPastaSaladComponent', () => {
  let component: GreekPastaSaladComponent;
  let fixture: ComponentFixture<GreekPastaSaladComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GreekPastaSaladComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GreekPastaSaladComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
