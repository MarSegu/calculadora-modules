import { Component, Input } from '@angular/core';
import { valor } from './valor.model';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent {

	titulo = "Aplicación de Calculadora";
	resultado: number; 

	resultadoSuma(operandos: number):void{
		this.resultado = operandos.valueOf(); 
	}
}
