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

  it(`should have a title 'Grillable Vegan Burger'`, () => {
    const fixture = TestBed.createComponent(VeganBurgerComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Grillable Vegan Burger');
  });

  it(`should have a show boolean to be true by default`, () => {
    const fixture = TestBed.createComponent(VeganBurgerComponent);
    const app = fixture.componentInstance;
    expect(app.show).toEqual(true);
  });
});
