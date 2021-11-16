import { Component, Input, OnInit } from '@angular/core';
import { valor } from '../valor.model';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css']
})
export class ResultadoComponent implements OnInit {

	constructor() { }

	ngOnInit(): void {
	}
	@Input() operandos: valor;
}
