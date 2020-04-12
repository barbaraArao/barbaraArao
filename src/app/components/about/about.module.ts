import { AboutComponent } from './about.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [AboutComponent],
  imports: [
    CommonModule
  ], 
  exports: [
    AboutComponent
  ]
})
export class AboutModule { }
