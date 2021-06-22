import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { SignupComponent } from '../signup/signup.component';
import { LoginService } from '../services/login.service';
import { GlobalConstants } from '../common/global-constant';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  successMsg:string;
  errorMsg:string;
  isLoading:boolean = false;
  submit = false;
  loginForm:any;
  constructor(private formBuilder:FormBuilder,
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<LoginComponent>,
    private _login:LoginService,
    public gVar : GlobalConstants) {
    
   }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  login(){
    console.log(this.loginForm.value);

    if (this.loginForm.invalid) {
      return;
    }
    this.submit = true;
    let email: string = this.loginForm.value.email;
    let password: string = this.loginForm.value.password;
    this.isLoading = true;
    this._login.login({ email, password }).then(res => {
      res.subscribe((response: any) => {
        if (response.status) {
          this.isLoading = false;
          // this.dialogRef.close();
          this.errorMsg = "";
          this.gVar.isLoggeddIn = true;
          this.successMsg = 'Login Successful';
          this.submit = false;
          console.log(response)
          localStorage.setItem('auth-token', response.data.accessToken)
          localStorage.setItem('email', response.data.email)
          localStorage.setItem('id', response.data.id)
          localStorage.setItem('mobile', response.data.mobile)
          localStorage.setItem('name', response.data.name)
          localStorage.setItem('isLoggedIn', 'loggedin')
          setTimeout(() => { window.location.reload() }, 500);
          // this.router.navigateByUrl('dashboard');
        } else {
          this.submit = false;
          this.isLoading = false;
          this.successMsg = "";
          this.errorMsg = response.message;
        }

      })
    }).catch(error => {
      this.submit = false;
      console.log(error)
    })

    
  }

  openRegisterModal(){
    const dialogRef = this.dialog.open(SignupComponent, {
      width: '500px',
      data: {}
    });

    this.dialogRef.close();

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
     
    });
  }

}
