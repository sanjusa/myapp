import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators,FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
signupForm!:FormGroup
  constructor() { }

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      'emailFormControl' : new FormControl(null, [
        Validators.required,
        Validators.email,
      ]),
      'password' : new FormControl(null, [
        Validators.required
      ]),
    })
  }

  onSubmit(){
    console.log('+','form submitted')
  }
}
