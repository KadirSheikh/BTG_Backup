import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HomeComponent } from '../home/home.component';
import { TestimonialService } from '../services/testimonial.service';
@Component({
  selector: 'app-testimonial-detail',
  templateUrl: './testimonial-detail.component.html',
  styleUrls: ['./testimonial-detail.component.css']
})
export class TestimonialDetailComponent implements OnInit {
  testArray: any;
  id:string = ""
  constructor(private _testimoinal:TestimonialService,public dialogRef: MatDialogRef<HomeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.id = this.data?.id;
    this._testimoinal.getOneTest(this.id).then(res => {
      res.subscribe((resp:any) => {
        console.log(resp.data);
        this.testArray = resp.data;
        // console.log(this.testArray );
        

        
      })
    })
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
