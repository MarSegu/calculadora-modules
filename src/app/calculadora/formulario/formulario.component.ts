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

	@Output() valoresFormulario = new EventEmitter<number>();

	operandoA: number;
	operandoB: number;
	
	sumar(): void{
		this.valoresFormulario.emit(this.operandoA + this.operandoB);
	}
}
