import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent {

  titulo = "Aplicación de Calculadora";
  resultado: number = 0;
  operandoA: number = 0;
  operandoB: number = 0;

  sumar():void{
	this.resultado = this.operandoA + this.operandoB;
  }

}
