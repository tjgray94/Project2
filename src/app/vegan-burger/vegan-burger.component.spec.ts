import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeganBurgerComponent } from './vegan-burger.component';

describe('VeganBurgerComponent', () => {
  let component: VeganBurgerComponent;
  let fixture: ComponentFixture<VeganBurgerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VeganBurgerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VeganBurgerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
