import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChickenParmComponent } from './chicken-parm.component';

describe('ChickenParmComponent', () => {
  let component: ChickenParmComponent;
  let fixture: ComponentFixture<ChickenParmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChickenParmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChickenParmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have a title 'Baked Chicken Parmesan'`, () => {
    const fixture = TestBed.createComponent(ChickenParmComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Baked Chicken Parmesan');
  });

  it(`should have a show boolean to be true by default`, () => {
    const fixture = TestBed.createComponent(ChickenParmComponent);
    const app = fixture.componentInstance;
    expect(app.show).toEqual(true);
  });
});
