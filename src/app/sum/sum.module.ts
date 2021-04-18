import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SumPageRoutingModule } from './sum-routing.module';

import { SumPage } from './sum.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SumPageRoutingModule
  ],
  declarations: [SumPage]
})
export class SumPageModule {}
