import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = {username: '', password: '', remember: false};
  constructor(private dialog: MatDialogRef<LoginComponent>) { }

  ngOnInit() {
  }
  onSubmit()
  {
    console.log(this.user);
    this.dialog.close();
  }

}
