import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IConfig, NgxMaskModule } from 'ngx-mask';

import { InputComponent } from './input/input.component';
import { ErrorComponent } from './error/error.component';
import { MaterialModule } from '../../modules/material.module';

const maskConfigFunction: () => Partial<IConfig> = () => {
	return {
	  validation: false,
	};
  };
  
@NgModule({
	declarations: [
		ErrorComponent,
		InputComponent,
	],
	imports: [
		CommonModule,
		FlexLayoutModule,
		FormsModule,
		ReactiveFormsModule,
		MaterialModule,
		FormsModule,
		NgxMaskModule.forRoot(maskConfigFunction),
	],
	exports: [
		ErrorComponent,
		InputComponent,
	]
})
export class FormComponentsModule { }
