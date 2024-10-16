import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { SkillsButtonComponent } from '../skills-button/skills-button.component';
import { CertificadoCardComponent } from "../certificado-card/certificado-card.component";
import { EstudiosListComponent } from '../estudios-list/estudios-list.component';
import { ExplaboralAccComponent } from "../explaboral-acc/explaboral-acc.component";

@Component({
  selector: 'app-landingpage',
  standalone: true,
  imports: [NavbarComponent, SkillsButtonComponent, CertificadoCardComponent, EstudiosListComponent, ExplaboralAccComponent],
  templateUrl: './landingpage.component.html',
  styleUrl: './landingpage.component.css'
})
export class LandingpageComponent {

}
