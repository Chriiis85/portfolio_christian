import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstudiosListComponent } from './estudios-list.component';

describe('EstudiosListComponent', () => {
  let component: EstudiosListComponent;
  let fixture: ComponentFixture<EstudiosListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EstudiosListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstudiosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
