import { Component, OnInit } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { AboutsService } from 'src/app/services/abouts.service';

@Component({
  selector: 'app-whistleblowing',
  templateUrl: './whistleblowing.component.html',
  styleUrls: ['./whistleblowing.component.css']
})
export class WhistleblowingComponent implements OnInit {
  body: any;
  heading: any;
  id: any;
  categories: any;
  dataSheets: any;

  constructor(private _about:AboutsService) { }

  ngOnInit(): void {
    window.scroll(0,0);
    this.getWhistleBlow();
    this.getHelp();
  }

  async getWhistleBlow(){
    (await this._about.getWhistleblowing()).subscribe((res:any) => {
      console.log(res.data);
      this.body = res.data[0].body,
      this.heading = res.data[0].heading,
      this.id = res.data[0]._id
      
    })
  }

  async getHelp(){
    (await this._about.getHelpDesk()).subscribe((res:any) => {
      console.log(res.data);
      this.categories = res.data
     
      
    })
  }
  async tabChanged(tabChangeEvent: MatTabChangeEvent) {
    console.log('tabChangeEvent => ', tabChangeEvent);
    console.log('index => ', tabChangeEvent.index);

    // console.log(this.categories[tabChangeEvent.index])
    let parentId = this.categories[tabChangeEvent.index].parentId
    let categoryId = this.categories[tabChangeEvent.index]._id

      ; (await this._about.getSingleComWhistleCategoryHelpdesk(categoryId)).subscribe((res: any) => {
        console.log(res)
        this.dataSheets = res.data
      })
  }

}
