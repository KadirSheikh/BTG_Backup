import { Component, OnInit } from '@angular/core';
import { CommingSoonService } from '../../app/services/comming-soon.service';

@Component({
  selector: 'app-coming-soon',
  templateUrl: './coming-soon.component.html',
  styleUrls: ['./coming-soon.component.css']
})
export class ComingSoonComponent implements OnInit {
  commingSoonData: any;

  constructor(private _commingSoon : CommingSoonService) { }

  ngOnInit(): void {
    window.scroll(0,0);

    this.getCommming();
  }

  async getCommming(){
    (await this._commingSoon.getCommingSoon()).subscribe((res:any) => {
      
      this.commingSoonData = res.data[0].data
      console.log(this.commingSoonData);
      
    })
  }

}
