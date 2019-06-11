import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from './../../services/authentication.service';

@Component({templateUrl: 'login.component.html'})
export class LoginComponent implements OnInit{

  loginForm: FormGroup;
  submitted = false;
  loading = false;
  returnUrl: string;
  error = '';

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private _authenticationService: AuthenticationService
  ) {}

  ngOnInit(){
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      app: ['', Validators.required]
    });

    this._authenticationService.logout();

    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/listado-datos';
  }

  get f(){
    return this.loginForm.controls;
  }

  onSubmit(){
    this.submitted = true;

    if(this.loginForm.invalid){
      return;
    }

    this.loading = true;

    this._authenticationService.login(this.f.email.value, this.f.password.value, this.f.app.value).subscribe(
        data => {
          if(data.sessionTokenBck){
            this.router.navigate([this.returnUrl]);
          }
        },
        error => {
          this.error = error.error;
          this.loading = false;
        }
      )
  }
}
