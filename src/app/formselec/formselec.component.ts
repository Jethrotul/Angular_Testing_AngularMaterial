import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formselec',
  templateUrl: './formselec.component.html',
  styleUrls: ['./formselec.component.css']
})
export class FormselecComponent implements OnInit {
  valor1 = null;
  valor2 = null;
  resultado = null;

  operacionSeleccionada = 'suma';
  tipoOperaciones = [
    'suma',
    'resta',
    'multiplicacion',
    'division',
  ];

  operar() {
    switch (this.operacionSeleccionada) {
      case 'suma' : this.resultado = this.valor1 + this.valor2;
                    break;
      case 'resta' : this.resultado = this.valor1 - this.valor2;
                     break;
      case 'multiplicacion' : this.resultado = this.valor1 * this.valor2;
                              break;
      case 'division' : this.resultado = this.valor1 / this.valor2;
                        break;
    }
  }
  constructor() { }

  ngOnInit() {
  }

}
