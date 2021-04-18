import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdddeletePageRoutingModule } from './adddelete-routing.module';

import { AdddeletePage } from './adddelete.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdddeletePageRoutingModule
  ],
  declarations: [AdddeletePage]
})
export class AdddeletePageModule {}
