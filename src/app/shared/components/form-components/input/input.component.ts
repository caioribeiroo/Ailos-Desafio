import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
	selector: 'app-input',
	templateUrl: './input.component.html',
	styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

	@Input() formGroup: any = FormGroup;
	@Input() formcontrolname = '';
	@Input() placeholder= '';
	@Input() label= '';
	@Input() iconName= '';
	@Input() maxLength= 0;
	@Input() mask = '';
	@Input() type = 'text';

	@Output() changedValue = new EventEmitter();

	constructor() {}

	ngOnInit(): void {

	}

	onChange(event: KeyboardEvent): void{
		let { value } : any = event.target
		if (this.maxLength) {
			if (value.length >= this.maxLength) {
				value = value.substring(0, (this.maxLength));
			}
			this.formGroup.get(this.formcontrolname).setValue(value);
		}
		this.onValueChange(value);
	}

	onValueChange(value: any): void {
		this.changedValue.emit(value);
	}

}
