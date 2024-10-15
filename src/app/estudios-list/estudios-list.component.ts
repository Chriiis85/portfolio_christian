import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-estudios-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './estudios-list.component.html',
  styleUrl: './estudios-list.component.css'
})
export class EstudiosListComponent {
  
  @Input() logo:string = "";
  @Input() title:string = "";
  @Input() center:string = "";
  @Input() date:string = "";
  @Input() type:string = "";

}
