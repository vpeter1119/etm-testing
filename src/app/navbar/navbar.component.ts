import { Component, OnInit } from '@angular/core';
import { MatDialog, DialogPosition } from '@angular/material/dialog';

import { AuthComponent } from '../auth/auth.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.less']
})
export class NavbarComponent implements OnInit {

  constructor(
    public _dialog: MatDialog,
  ) { }

  ngOnInit(): void {
  }

  openAuthDialog() {
    const dialog = this._dialog.open(AuthComponent);
  }

}
