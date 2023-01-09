import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularS14';
  model = {
    nombre: "",
    dni: "",
    estado_civil: "",
  }
  datos = '';
 
  ngOnInit():void{
  }

  onSubmit(values: any):void{
    console.log('Form Values: ', values)
    this.datos = values;
  }
}
