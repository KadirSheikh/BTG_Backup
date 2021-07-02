import { Component, OnInit } from '@angular/core';
import { AboutsService } from 'src/app/services/abouts.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  teamData: any;

  constructor(private _team:AboutsService) { }

  ngOnInit(): void {
    this.getTeam();
  }

  async getTeam(){
    (await this._team.getTeam()).subscribe((res:any) => {
      console.log(res.data);
      this.teamData = res.data;
      
    })
  }

}
