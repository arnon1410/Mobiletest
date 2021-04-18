import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {firebaseConfig} from '../environments/environment';

import { Facebook } from '@ionic-native/facebook/ngx'
import { AppPreferences } from '@ionic-native/app-preferences/ngx';
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
   AngularFireModule.initializeApp(firebaseConfig),
   AngularFireAuthModule,
   AngularFirestoreModule],
  providers: [StatusBar,{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  Facebook, AppPreferences ],

  bootstrap: [AppComponent],
})
export class AppModule {}
