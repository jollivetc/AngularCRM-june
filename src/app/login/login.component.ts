import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'crm-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  errorMessagesLogin = {
    required: 'you should put a value',
    minlength: 'at least 3 characters'
  }
  errorMessagesPassword = {
    required: 'you should put a value',
    validateNo$InField: 'you should not put $'
  }

  constructor() {
    this.loginForm = new FormGroup({
      login: new FormControl('', [Validators.required, Validators.minLength(3)]),
      password: new FormControl('',[Validators.required, validateNo$InField])
    })
   }

  ngOnInit(): void {
  }

  login():void {
    console.log(this.loginForm)
  }

}

function validateNo$InField(c:AbstractControl): ValidationErrors|null {
  const value:string = c.value;
  if(value.indexOf('$')>=0){
    return {validateNo$InField : 'There should not be $'}
  }
  return null;
}
