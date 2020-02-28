import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  valor1 = 0;
  valor2 = 0;
  resultado = 0;
  sumar() {
    this.resultado = this.valor1 + this.valor2;
  }
  constructor() {
  }
  ngOnInit() {
  }
}
