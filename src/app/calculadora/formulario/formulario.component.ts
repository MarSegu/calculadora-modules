import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { empty } from 'rxjs';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

	constructor() { }

	ngOnInit(): void {
	}

	operandoA: number;
	operandoB: number;

	@Output() resultadoSuma = new EventEmitter<number>();

	sumar():void{
		let resultado = this.operandoA + this.operandoB;
		this.resultadoSuma.emit(resultado);
		
	}

}
