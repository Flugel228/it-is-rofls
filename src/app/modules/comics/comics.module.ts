import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';

import { ComicsRoutingModule } from './comics-routing.module';
import { ComicsComponent } from './comics.component';


@NgModule({
  declarations: [
    ComicsComponent
  ],
  imports: [
    CommonModule,
    ComicsRoutingModule,
    NgOptimizedImage
  ]
})
export class ComicsModule { }
