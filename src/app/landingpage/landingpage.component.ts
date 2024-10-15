import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { SkillsButtonComponent } from '../skills-button/skills-button.component';
import { CertificadoCardComponent } from "../certificado-card/certificado-card.component";
import { EstudiosListComponent } from '../estudios-list/estudios-list.component';

@Component({
  selector: 'app-landingpage',
  standalone: true,
  imports: [NavbarComponent, SkillsButtonComponent, CertificadoCardComponent, EstudiosListComponent],
  templateUrl: './landingpage.component.html',
  styleUrl: './landingpage.component.css'
})
export class LandingpageComponent {

}
