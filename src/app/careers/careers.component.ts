import { Component, OnInit } from '@angular/core';
import { CareersService } from '../services/careers.service';

@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.css']
})
export class CareersComponent implements OnInit {
  carrers: any;

  constructor(private _carrer:CareersService) { }

  ngOnInit(): void {
    window.scroll(0,0);
    this.getCareers()
    
  }

  async getCareers(){

    (await this._carrer.getCareer()).subscribe((res:any) => {
      this.carrers = res?.data;
      console.log(this.carrers);
      
    })

  }

}
