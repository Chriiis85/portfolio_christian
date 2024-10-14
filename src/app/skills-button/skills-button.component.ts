import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-skills-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills-button.component.html',
  styleUrl: './skills-button.component.css'
})
export class SkillsButtonComponent {

  //Inputs para recibir el icono, nombre y color del boton
  @Input() icon: string = '';
  @Input() name: string = 'Button';
  @Input() color: string = 'blue';
}
