import { AboutModule } from './../../components/about/about.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileModule } from './../../components/profile/profile.module';
import { HomeComponent } from './home.component';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    ProfileModule,
    AboutModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
