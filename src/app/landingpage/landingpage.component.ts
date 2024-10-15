import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { SkillsButtonComponent } from '../skills-button/skills-button.component';
import { CertificadoCardComponent } from "../certificado-card/certificado-card.component";

@Component({
  selector: 'app-landingpage',
  standalone: true,
  imports: [NavbarComponent, SkillsButtonComponent, CertificadoCardComponent],
  templateUrl: './landingpage.component.html',
  styleUrl: './landingpage.component.css'
})
export class LandingpageComponent {

}
