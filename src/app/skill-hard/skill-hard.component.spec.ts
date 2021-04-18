import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillHardComponent } from './skill-hard.component';

describe('SkillHardComponent', () => {
  let component: SkillHardComponent;
  let fixture: ComponentFixture<SkillHardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillHardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillHardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
