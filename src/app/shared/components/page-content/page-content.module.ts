import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageContentComponent } from './page-content.component';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [
    PageContentComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule
  ],
  exports: [
    PageContentComponent
  ]
})
export class PageContentModule { }
