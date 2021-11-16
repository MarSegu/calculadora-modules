import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { valor } from '../valor.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

	constructor() { }

	ngOnInit(): void {
	}

	@Output() valores = new EventEmitter<number>();

	operandoA: number = 0;
	operandoB: number = 0;
	
	sumar(): void{
		this.valores.emit(this.operandoA + this.operandoB);
	}
}
