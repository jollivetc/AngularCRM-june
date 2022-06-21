import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { AuthenticationService } from './authentication.service';

@Component({
  selector: 'crm-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
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

  constructor(private authentService: AuthenticationService) {
    this.loginForm = new FormGroup({
      login: new FormControl('', [Validators.required, Validators.minLength(3)]),
      password: new FormControl('',[Validators.required, validateNo$InField])
    })
   }

  ngOnInit(): void {
  }

  login():void {
    const user = this.authentService.authentUser(
        this.loginForm.value.login,
        this.loginForm.value.password
    )
    console.log(user);
  }

}

function validateNo$InField(c:AbstractControl): ValidationErrors|null {
  const value:string = c.value;
  if(value.indexOf('$')>=0){
    return {validateNo$InField : 'There should not be $'}
  }
  return null;
}
