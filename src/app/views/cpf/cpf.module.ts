import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CpfRoutingModule } from './cpf-routing.module';
import { CpfComponent } from './cpf.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CpfComponent
  ],
  imports: [
    CommonModule,
    CpfRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CpfModule { }
