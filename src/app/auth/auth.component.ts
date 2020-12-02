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
  Login(formData) {
	console.warn(formData.form.value);
	const input = {
	  username: formData.form.value.username,
	  password: formData.form.value.password
	}    
	this.authService.Login(input);
  }

	Register(formData) {
		console.warn(formData.form.value);
    }

}
