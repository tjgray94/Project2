import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeganPancakesComponent } from './vegan-pancakes.component';

describe('VeganPancakesComponent', () => {
  let component: VeganPancakesComponent;
  let fixture: ComponentFixture<VeganPancakesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VeganPancakesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VeganPancakesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have a title 'Vegan Pancakes'`, () => {
    const fixture = TestBed.createComponent(VeganPancakesComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Vegan Pancakes');
  });


  it(`should have a show boolean to be true by default`, () => {
    const fixture = TestBed.createComponent(VeganPancakesComponent);
    const app = fixture.componentInstance;
    expect(app.show).toEqual(true);
  });
});
