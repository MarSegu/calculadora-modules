import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent {

	titulo = "Aplicación de Calculadora";
	resultadoPadre: number;

	procesarResultado(resultado: number){
		this.resultadoPadre = resultado;
	}
}
