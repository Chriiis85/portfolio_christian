import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-certificado-card',
  standalone: true,
  imports: [],
  templateUrl: './certificado-card.component.html',
  styleUrl: './certificado-card.component.css'
})
export class CertificadoCardComponent {

  @Input() img:string = '';
  @Input() title:string = '';
  @Input() desc:string = '';
  @Input() url:string = '';
  
}
