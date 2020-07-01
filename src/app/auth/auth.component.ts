import { Component, OnInit } from '@angular/core';

import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.less']
})
export class AuthComponent implements OnInit {

  constructor(
    public authService: AuthService,
  ) { }

  left = true;
  right = false;

  ngOnInit(): void {
  }

  // Switch between Login and Register tabs
  SwitchTab(s): void {
    if (s === "left") {
      this.left = true;
      this.right = false;
    } else {
      this.left = false;
      this.right = true;
    }
  }

  // Login with email and password
  Login() {
    const input = {
      email: "example@example.com",
      password: "123456"
    }    
    this.authService.Login(input);
  }

}
