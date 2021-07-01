import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CareersService } from '../services/careers.service';

@Component({
  selector: 'app-apply-now',
  templateUrl: './apply-now.component.html',
  styleUrls: ['./apply-now.component.css']
})
export class ApplyNowComponent implements OnInit {
  carrers: any;
  jobId: any;
  applyNowForm:any;
  successMsg:string;
  errorMsg:string;
  isLoading:boolean = false;
  submit = false;
  cvName: any;
  coverName: any;
  jobName: any;
  linkedIn: any;
  constructor(private formBuilder:FormBuilder,private _activatedRoute: ActivatedRoute,private _carrer:CareersService) { }

  ngOnInit(): void {

    this.applyNowForm = this.formBuilder.group({
      
      fullName: ['', [Validators.required]],
      email: ['', [Validators.required]],
      mobileNumber: ['', [Validators.required]],
      cv: ['', [Validators.required]],
      coverLetter: ['', [Validators.required]]
    });

    

    this._activatedRoute.queryParams.subscribe(async params => {
      this.jobId = params['jobid'];
      this.getCareers(this.jobId)

    })
  }

  async getCareers(id){

    (await this._carrer.getSingleCareer(id)).subscribe((res:any) => {
      this.carrers = res?.data;
      console.log(this.carrers);
      this.jobName = this.carrers.name;
      this.linkedIn = this.carrers.linkedInLink;
      
    })

  }

  changeFile(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });
  }

  async setCv(e){

    this.cvName = e.target.files[0].name;

    if (e.target.files) {
      const file = e.target.files[0];
      const type = file.type;
      await this.changeFile(file).then((base64: string): any => {
        console.log(base64);
        
          this.applyNowForm.patchValue({
            cv: base64
          })
      });
    } 
  }
  async setCoverletter(e){

    this.coverName = e.target.files[0].name;

    if (e.target.files) {
      const file = e.target.files[0];
      const type = file.type;
      await this.changeFile(file).then((base64: string): any => {
        console.log(base64);
        
          this.applyNowForm.patchValue({
            coverLetter: base64
          })
      });
    } 
  }

  applyNow(){
    

    console.log(this.applyNowForm.value);
    console.log(this.jobId);
    
    let fullName: string = this.applyNowForm.value.fullName;
    let mobileNumber: string = this.applyNowForm.value.mobileNumber;
    let email: string = this.applyNowForm.value.email;
    let cv: string = this.applyNowForm.value.cv;
    let coverLetter: string = this.applyNowForm.value.coverLetter;
    let jobName:string = this.jobName;
    let jobId = this.jobId;
    

    if (this.applyNowForm.invalid) {
      return;
    }

    this.submit = true;
    this.isLoading = true;
    
    this._carrer.applyNow({fullName , mobileNumber , email , cv , coverLetter , jobId , jobName}).then(res => {
      res.subscribe((response:any) => {
        if (response.status) {
          this.isLoading = false;
          this.errorMsg = "";
          this.successMsg = 'Applied Successfully';
          this.submit = false;
          setTimeout(() => { window.location.reload() }, 500);
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

}
