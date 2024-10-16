import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExplaboralAccComponent } from './explaboral-acc.component';

describe('ExplaboralAccComponent', () => {
  let component: ExplaboralAccComponent;
  let fixture: ComponentFixture<ExplaboralAccComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExplaboralAccComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExplaboralAccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
