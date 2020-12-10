import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({providedIn: 'root'})

export class AuthService {

    constructor(
        private http: HttpClient
    ) { }

    apiUrl = environment.apiRoot + '/users/';
    isAuth = false;

  // Register with email and password

  Register(input) {
  }

  // Login with email and password

    Login(input) {
        this.http.post(this.apiUrl + 'login', input).subscribe(response => {
            console.warn(response);
        })
    }

  // Logout

  Logout() {
  }

}
