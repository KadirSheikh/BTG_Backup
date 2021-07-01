import { Component, OnInit } from '@angular/core';
import { AboutsService } from 'src/app/services/abouts.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  historyData: any;

  constructor(private _history:AboutsService) { }

  ngOnInit(): void {
    window.scroll(0,0);
    this.getHistory();
  }

  async getHistory(){
    (await this._history.getHistory()).subscribe((res:any) => {
      console.log(res.data);
      this.historyData = res.data;
      
    })
  }

}
