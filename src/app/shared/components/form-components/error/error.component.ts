import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
	selector: 'app-error',
	templateUrl: './error.component.html',
	styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit {

	@Input() formGroup:any = FormGroup;
	@Input() formcontrolname = "";
	
	constructor() { }

	ngOnInit(): void {
		this.formGroup.get(this.formcontrolname);
	}

	errors: { [x: string]: string  }= {
		'required': 'Dado obrigatório não informado',
		'cpfNotValid': "CPF informado inválido"
	}

	getErrorMessage(): string {
		const control = this.formGroup.get(this.formcontrolname);
		let error = ''
		for (const iterator of Object.keys(control.errors)) {
			if (this.errors[iterator]) {
				error = this.errors[iterator]
				break;
			}
		}
		return error
	}

}
