import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular'

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private nav: NavController) { }

  ngOnInit() {
  }
  gotoLoginpage(){
    this.nav.navigateForward(['login']);
  }

  registerUser(){
    this.nav.navigateForward(['signup'])
  }
  

}
