import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { SkillsButtonComponent } from '../skills-button/skills-button.component';

@Component({
  selector: 'app-landingpage',
  standalone: true,
  imports: [NavbarComponent, SkillsButtonComponent],
  templateUrl: './landingpage.component.html',
  styleUrl: './landingpage.component.css'
})
export class LandingpageComponent {

}
