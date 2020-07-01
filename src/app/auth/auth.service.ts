import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({providedIn: 'root'})

export class AuthService {

  constructor(
    public afAuth: AngularFireAuth, // Inject Firebase auth service
  ) { }

  isAuth = false;

  // Sign in with Facebook
  FacebookAuth() {
    return this.SocialLogin(new firebase.auth.FacebookAuthProvider());
  }

  // Sign in with Google
  GoogleAuth() {
    //return this.SocialLogin(new firebase.auth.GoogleAuthProvider());
    window.alert("Sorry, Google authentication is currently unavailable.");
  }

  // Auth logic to run auth providers
  SocialLogin(provider) {
    return this.afAuth.signInWithPopup(provider)
      .then((result) => {
        // Handle successful login
        console.warn('You have been successfully logged in!');
        console.warn(result);
      }).catch((error) => {
        // Handle error
        console.warn(error)
      })
  }

  // Register with email and password

  Register(input) {
    firebase.auth().createUserWithEmailAndPassword(input.email, input.password)
    .then((result) => {
      // Handle successful registration
    }).catch((error) => {
      // Handle error
      console.warn(error)
    })
  }

  // Login with email and password

  Login(input) {
    firebase.auth().signInWithEmailAndPassword(input.email, input.password)
      .then((result) => {
        // Handle successful registration
        console.warn("Successful login.");
        console.warn(result);
      }).catch((error) => {
        // Handle error
        console.warn(error);
      })
  }

  Logout() {
    this.afAuth.signOut();
  }

}
