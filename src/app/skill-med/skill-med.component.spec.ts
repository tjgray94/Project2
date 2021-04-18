import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillMedComponent } from './skill-med.component';

describe('SkillMedComponent', () => {
  let component: SkillMedComponent;
  let fixture: ComponentFixture<SkillMedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillMedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillMedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
