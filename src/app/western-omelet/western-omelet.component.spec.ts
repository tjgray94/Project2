import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WesternOmeletComponent } from './western-omelet.component';

describe('WesternOmeletComponent', () => {
  let component: WesternOmeletComponent;
  let fixture: ComponentFixture<WesternOmeletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WesternOmeletComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WesternOmeletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have a title 'Western Omelet'`, () => {
    const fixture = TestBed.createComponent(WesternOmeletComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Western Omelet');
  });

  it(`should have a show boolean to be true by default`, () => {
    const fixture = TestBed.createComponent(WesternOmeletComponent);
    const app = fixture.componentInstance;
    expect(app.show).toEqual(true);
  });
});
