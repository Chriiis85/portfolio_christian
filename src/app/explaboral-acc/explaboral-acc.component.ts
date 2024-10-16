import { Component, Input } from '@angular/core';
import { EstudiosListComponent } from "../estudios-list/estudios-list.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-explaboral-acc',
  standalone: true,
  imports: [EstudiosListComponent,CommonModule],
  templateUrl: './explaboral-acc.component.html',
  styleUrl: './explaboral-acc.component.css'
})
export class ExplaboralAccComponent {
  
  @Input() logo:string = "";
  @Input() title:string = "";
  @Input() area:string = "";
  @Input() date:string = "";
  @Input() location:string = "";
  @Input() desc1:string = "";
  @Input() desc2:string = "";
  @Input() desc3:string = "";
}
