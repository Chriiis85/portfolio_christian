import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificadoCardComponent } from './certificado-card.component';

describe('CertificadoCardComponent', () => {
  let component: CertificadoCardComponent;
  let fixture: ComponentFixture<CertificadoCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CertificadoCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CertificadoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
