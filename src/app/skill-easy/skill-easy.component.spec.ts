import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillEasyComponent } from './skill-easy.component';

describe('SkillEasyComponent', () => {
  let component: SkillEasyComponent;
  let fixture: ComponentFixture<SkillEasyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillEasyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillEasyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
