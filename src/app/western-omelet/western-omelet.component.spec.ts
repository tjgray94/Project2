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
});
