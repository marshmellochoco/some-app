import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HomeItemComponent } from './home-item/home-item.component';


@NgModule({
  declarations: [
    HomeComponent,
    HomeItemComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    HttpClientModule,
  ]
})
export class HomeModule { }
