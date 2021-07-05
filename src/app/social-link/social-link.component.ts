import { Component, OnInit } from '@angular/core';
import { SocialLinkService } from '../services/social-link.service';

@Component({
  selector: 'app-social-link',
  templateUrl: './social-link.component.html',
  styleUrls: ['./social-link.component.css']
})
export class SocialLinkComponent implements OnInit {
  socials:any;
  constructor(
    private _social: SocialLinkService
  ) { }

  ngOnInit(): void {
    this.getSocial();
  }

  async getSocial(){
    (await this._social.getSocial()).subscribe( (res:any) => {
      console.log(res);
      this.socials = res.data;
    })
  }

}
