import { Component, OnInit } from '@angular/core';
import { TestimonialService } from '../services/testimonial.service';
@Component({
  selector: 'app-all-testimonial',
  templateUrl: './all-testimonial.component.html',
  styleUrls: ['./all-testimonial.component.css']
})
export class AllTestimonialComponent implements OnInit {
  testArray: any;

  constructor(private _testimoinal:TestimonialService) { }

  ngOnInit(): void {

    window.scroll(0,0)
    this._testimoinal.getAllTest().then(res => {
      res.subscribe((resp:any) => {
        // console.log(resp.data);
        this.testArray = resp.data;
        console.log(this.testArray );
        

        
      })
    })
  }

}
