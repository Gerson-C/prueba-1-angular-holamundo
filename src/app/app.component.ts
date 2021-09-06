import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'holamundo';
  alumno = "Gerson Cuá";
  existeCurso = '';
  verificarCurso(clase : any){
    if(clase.value == ''){
      this.existeCurso = '';
    }else{
      this.existeCurso = 'checked';
    }
  }
}
