import { Component, Input,} from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent {
 @Input() values: any; 
 ngOnInit(): void {
    
 }
}
