import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsButtonComponent } from './skills-button.component';

describe('SkillsButtonComponent', () => {
  let component: SkillsButtonComponent;
  let fixture: ComponentFixture<SkillsButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillsButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillsButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
