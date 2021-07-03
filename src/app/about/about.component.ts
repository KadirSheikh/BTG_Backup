import { Component, OnInit } from '@angular/core';
import { AboutsService } from '../services/abouts.service';
import { of } from 'rxjs';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  heading: any;
  section1: any;
  section2: any;
  section3: any;
  vision: any;
  misson: any;

  data: any = [];
  leadershipData: any = [];




  constructor(
    private _about: AboutsService
  ) { }

  ngOnInit(): void {
    window.scroll(0, 0);
    this.getAbout();
    this.getLeader();
  }

  async getAbout() {
    (await this._about.getAbout()).subscribe((res: any) => {
      console.log(res);
      this.data = res.data[0]

      this.heading = this.data.heading
      this.section1 = this.data.section1
      this.section2 = this.data.section2
      this.section3 = this.data.section3
      this.vision = this.data.vision
      this.misson = this.data.misson
    })
  }

  
  parentArray = [];
  async getLeader() {
    (await this._about.getLeadership()).subscribe((res: any) => {
      console.log(res);
      this.leadershipData = res.data
      
      this.parentArray = [];
      let childArray = [];
      if(this.leadershipData.length > 3){
        this.leadershipData.forEach(item => {
          childArray.push(item);
          console.log(childArray);
          
          if (childArray.length === 3) {
            this.parentArray.push(childArray);
            childArray = [];
          }
        });
      }else{
        this.parentArray.push(this.leadershipData);
      }
      console.log(this.parentArray);
      
    })
  }
}
