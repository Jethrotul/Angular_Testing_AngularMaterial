import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formselec3',
  templateUrl: './formselec3.component.html',
  styleUrls: ['./formselec3.component.css']
})
export class Formselec3Component implements OnInit {
  valor1 = null;
  valor2 = null;
  resultado = null;

  operaciones = [
    {valor: 'suma', muestraValor: 'Sumar'},
    {valor: 'resta', muestraValor: 'Restar'},
    {valor: 'multiplicacion', muestraValor: 'Multiplicar'},
    {valor: 'division', muestraValor: 'Dividir'}
  ];

  seleccionada: string = this.operaciones[0].valor;

  operar() {
    switch (this.seleccionada) {
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
