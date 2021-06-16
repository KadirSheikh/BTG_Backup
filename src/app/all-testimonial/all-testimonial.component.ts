import { Component, OnInit } from '@angular/core';
import { TestimonialService } from '../services/testimonial.service';
import {MatDialog} from '@angular/material/dialog';
import { TestimonialDetailComponent } from '../testimonial-detail/testimonial-detail.component';

@Component({
  selector: 'app-all-testimonial',
  templateUrl: './all-testimonial.component.html',
  styleUrls: ['./all-testimonial.component.css']
})
export class AllTestimonialComponent implements OnInit {
  testArray: any;
  loader:boolean = true;
  constructor(private _testimoinal:TestimonialService,public dialog: MatDialog) { }

  ngOnInit(): void {

    window.scroll(0,0)
    this._testimoinal.getAllTest().then(res => {
      res.subscribe((resp:any) => {
        this.loader = false;
        // console.log(resp.data);
        this.testArray = resp.data;
        console.log(this.testArray );
        

        
      })
    })
  }

  openDialog(id:string){
    console.log(id);

    const dialogRef = this.dialog.open(TestimonialDetailComponent , {
      
      data: {id}
    });
    
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
    
  }

}
