import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommingSoonService } from '../../app/services/comming-soon.service';
import { SubscribeService } from '../services/subscribe.service';

@Component({
  selector: 'app-coming-soon',
  templateUrl: './coming-soon.component.html',
  styleUrls: ['./coming-soon.component.css']
})
export class ComingSoonComponent implements OnInit {
  commingSoonData: any;
  emailSub: any;
  id: any;

  constructor(private _commingSoon: CommingSoonService, private _sub: SubscribeService, private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    window.scroll(0, 0);

    this.route.params.subscribe(params => {
      this.id = params.id

      console.warn(this.id);


    })

    this.getCommming();
  }

  async getCommming() {
    (await this._commingSoon.getCommingSoon()).subscribe((res: any) => {

      this.commingSoonData = res.data[0].data
      console.log(this.commingSoonData);

    })
  }

  onKey(e) {
    this.emailSub = e.target.value;
  }

  async Subscribe() {




    let url = window.location.href;
    let body = {  "type": "1", "email": this.emailSub, "url": url, "id": this.id };
    console.warn(body);
      (await this._sub._subscribe(body)).subscribe((res: any) => {
        console.warn(res);

      })
  }

}
