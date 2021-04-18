import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChiliComponent } from './chili.component';

describe('ChiliComponent', () => {
  let component: ChiliComponent;
  let fixture: ComponentFixture<ChiliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChiliComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChiliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have a title 'Vegan Sweet Potato Chili'`, () => {
    const fixture = TestBed.createComponent(ChiliComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Vegan Sweet Potato Chili');
  });

  it(`should have a show boolean to be true by default`, () => {
    const fixture = TestBed.createComponent(ChiliComponent);
    const app = fixture.componentInstance;
    expect(app.show).toEqual(true);
  });
});
