import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { SignupService } from '../services/signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm:any;
  successMsg:string;
  errorMsg:string;
  isLoading:boolean = false;
  submit = false;
  constructor(private formBuilder:FormBuilder,
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<SignupComponent>,
    public _signup:SignupService) { }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      mobile: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  signup(){
    console.log(this.signupForm.value);

    console.log(this.signupForm.value);

    if (this.signupForm.invalid) {
      return;
    }
    this.submit = true;
    let name: string = this.signupForm.value.name;
    let mobile: string = this.signupForm.value.mobile;
    let email: string = this.signupForm.value.email;
    let password: string = this.signupForm.value.password;
    this.isLoading = true;
    this._signup.signup({name, email,mobile, password }).then(res => {
      res.subscribe((response: any) => {
        if (response.status) {
          this.isLoading = false;
          // this.dialogRef.close();
          this.errorMsg = "";
          this.successMsg = 'Signup Successful.Please Login';
          this.submit = false;
          console.log(response)
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

  openLoginModal(){
    this.changePosition()
    const dialogRef = this.dialog.open(LoginComponent, {
      width: '500px',
      data: {}
    });

    // this.dialogRef.updatePosition({ top: '50px', left: '50px' });

    this.dialogRef.close();

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
     
    });
  }

  changePosition() {
    this.dialogRef.updatePosition({ top: '500px', left: '500px' });
}

}
