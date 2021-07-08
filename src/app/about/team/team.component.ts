import { Component, OnInit } from '@angular/core';
import { AboutsService } from 'src/app/services/abouts.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  teamData: any;
  leadershipData: any = [];
  constructor(private _about:AboutsService) { }

  ngOnInit(): void {
    this.getTeam();
    this.getLeader();
  }

  async getTeam(){
    (await this._about.getTeam()).subscribe((res:any) => {
      console.log(res.data);
      this.teamData = res.data;
      
    })
  }

  parentArray = [];
  async getLeader() {
    (await this._about.getLeadership()).subscribe((res: any) => {
      console.log(res);
      this.leadershipData = res.data

      this.parentArray = this.chunk_inefficient(this.leadershipData, 3);
      // Partial Works
      // this.parentArray = [];
      // let childArray = [];
      // if(this.leadershipData.length > 3){
      //   this.leadershipData.forEach(item => {
      //     childArray.push(item);
      //     console.log(childArray);
          
      //     if (childArray.length === 3) {
      //       this.parentArray.push(childArray);
      //       childArray = [];
      //     }
      //   });
      // }else{
      //   this.parentArray.push(this.leadershipData);
      // }
      console.log(this.parentArray);
      
    })
  }

  chunk_inefficient(array,chunkSize) {
    // var array = this;
    return [].concat.apply([],
      array.map(function(elem, i) {
        return i % chunkSize ? [] : [array.slice(i, i + chunkSize)];
      })
    );
  }

}
