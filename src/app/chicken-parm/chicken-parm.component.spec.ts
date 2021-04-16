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
});
