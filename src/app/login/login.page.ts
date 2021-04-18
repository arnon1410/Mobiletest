import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormControl, ReactiveFormsModule} from '@angular/forms';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import {AuthService} from 'src/app/services/auth.service';
import {firebaseAuth} from '../../environments/authconfig';
import {Facebook, FacebookLoginResponse} from '@ionic-native/facebook/ngx'
import firebase from 'firebase/app';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {


  validationUserMessage ={
    email:[
      {type:"required", message:"Please enter your Email"},
      {type:"pattern", message:"The Email entered is Incorrect.Try again"}
    ],
    password:[
      {type:"required", message:"please Enter your Password!"},
      {type:"minlength", message:"The Password must be at least 5 characters or more"}

    ]
  }

  validationFormUser: FormGroup;

  constructor(public formbuider: FormBuilder,
    public authservice: AuthService,
    private router: Router,
    private nav: NavController,
    private firestore: AngularFirestore,
    private fbook: Facebook
    ) { }
  ngOnInit() {
    this.validationFormUser = this.formbuider.group({
    email: new FormControl('', Validators.compose([
      Validators.required,
      Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
    ])),
    password: new FormControl('', Validators.compose([
      Validators.required,
      //Validators.minLength(5)
    ]))
  })
}
  forgotUser(){
    this.nav.navigateForward(['forgot-password'])
  }

  gotouploadimage(){
    this.nav.navigateForward(['uploadimage']);
  }

  LoginUser(value){
    console.log("Am logged in");
    try{
       this.authservice.loginFireauth(value).then( resp =>{
         console.log(resp);
      //  this.router.navigate(['tab'])

       if(resp.user){

        this.authservice.setUser({
          username : resp.user.displayName,
          uid: resp.user.uid
        })

        const userProfile = this.firestore.collection('profile').doc(resp.user.uid);

         userProfile.get().subscribe( result=>{

          if(result.exists){
            this.nav.navigateForward(['tab']);
          }else{

            this.firestore.doc(`profile/${this.authservice.getUID()}`).set({
              email: resp.user.email,
              name: resp.user.displayName
            });

             this.nav.navigateForward(['uploadimage']);
          }
         })
       }


       })
    }catch(err){
      console.log(err);
    }
  }

loginwithFacebook(){

  this.fbook.login(["public_profile","email"]).then( (response: FacebookLoginResponse)=>{
    console.log(response);
    const userId = response.authResponse.userID;
    const userToken = response.authResponse.accessToken;

    if(response.status === "connected"){
     console.log("FacebookRESP", response)

     firebaseAuth().signInWithCredential(firebase.auth.FacebookAuthProvider.credential(userToken)).then( response=>{
       console.log("user", response);
      if(response.user){
        this.nav.navigateForward(['forgot-password']);
      }

      this.fbook.api('/me?fields=name,email',['public_profile','email']).then( response=>{
         console.log("user-fb-API",response);

       response.picture = 'https://graph.facebook.com' + userId + 'picture?type=large';

       console.log("Userprofile-Picture:::",response.picture);


      }).catch(e=>{
        console.log(e);
      })



     }).catch(e =>{
       console.log(e);
     });

    }
  }, errro=>{
    console.log("FIRE:ERROR", errro)
  })
 }

}
