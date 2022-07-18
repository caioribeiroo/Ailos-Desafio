import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FooterModule } from './components/footer/footer.module';
import { MenuModule } from './components/menu/menu.module';
import { PageContentModule } from './components/page-content/page-content.module';
import { PageHeaderModule } from './components/page-header/page-header.module';
import { NgxMaskModule, IConfig } from 'ngx-mask'
import { MaterialModule } from './modules/material.module';
import { FormComponentsModule } from './components/form-components/form-components.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

const maskConfigFunction: () => Partial<IConfig> = () => {
  return {
    validation: false,
  };
};

@NgModule({
  imports: [
    NgxMaskModule.forRoot(maskConfigFunction),
    MaterialModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    MenuModule,
    PageHeaderModule,
    FooterModule,
    PageContentModule,
    NgxMaskModule,
    MaterialModule,
    FormComponentsModule,
    FlexLayoutModule,
    FontAwesomeModule
  ],
})

export class SharedModule { }