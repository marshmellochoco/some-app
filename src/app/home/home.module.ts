import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeItemComponent } from './home-item/home-item.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [HomeItemComponent, HomeComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [HomeComponent],
})
export class HomeModule { }
