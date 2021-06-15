import { Component, OnInit } from '@angular/core';
import { EventsService } from '../services/events.service';
@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  events:any = [{
    "heading":"TappiCon 2021",
    "date":"25 - 28 APR 2021",
    "location":"Atlanta, GA USA",
    "content":`TAPPICon will be held in the Spring and Fall - offering you the opportunity
    to stay abreast of the latest technologies, processes and advancements throughout the year...`,
    "button":"<span class='text-primary font-weight-bold'>Upcoming</span>"
  },
  {
    "heading":"TappiCon 2021",
    "date":"25 - 28 APR 2021",
    "location":"Atlanta, GA USA",
    "content":`TAPPICon will be held in the Spring and Fall - offering you the opportunity
    to stay abreast of the latest technologies, processes and advancements throughout the year...`,
    "button":"<span class='text-success font-weight-bold'>Ongoing</span>"
  },
  {
    "heading":"TappiCon 2021",
    "date":"25 - 28 APR 2021",
    "location":"Atlanta, GA USA",
    "content":`TAPPICon will be held in the Spring and Fall - offering you the opportunity
    to stay abreast of the latest technologies, processes and advancements throughout the year...`,
    "button":"<span class='text-danger font-weight-bold'>Past</span>"
  },
  {
    "heading":"TappiCon 2021",
    "date":"25 - 28 APR 2021",
    "location":"Atlanta, GA USA",
    "content":`TAPPICon will be held in the Spring and Fall - offering you the opportunity
    to stay abreast of the latest technologies, processes and advancements throughout the year...`,
    "button":"<span class='text-primary font-weight-bold'>Upcoming</span>"
  },
  {
    "heading":"TappiCon 2021",
    "date":"25 - 28 APR 2021",
    "location":"Atlanta, GA USA",
    "content":`TAPPICon will be held in the Spring and Fall - offering you the opportunity
    to stay abreast of the latest technologies, processes and advancements throughout the year...`,
    "button":"<span class='text-success font-weight-bold'>Ongoing</span>"
  },
  {
    "heading":"TappiCon 2021",
    "date":"25 - 28 APR 2021",
    "location":"Atlanta, GA USA",
    "content":`TAPPICon will be held in the Spring and Fall - offering you the opportunity
    to stay abreast of the latest technologies, processes and advancements throughout the year...`,
    "button":"<span class='text-danger font-weight-bold'>Past</span>"
  },
  {
    "heading":"TappiCon 2021",
    "date":"25 - 28 APR 2021",
    "location":"Atlanta, GA USA",
    "content":`TAPPICon will be held in the Spring and Fall - offering you the opportunity
    to stay abreast of the latest technologies, processes and advancements throughout the year...`,
    "button":"<span class='text-primary font-weight-bold'>Upcoming</span>"
  },
  {
    "heading":"TappiCon 2021",
    "date":"25 - 28 APR 2021",
    "location":"Atlanta, GA USA",
    "content":`TAPPICon will be held in the Spring and Fall - offering you the opportunity
    to stay abreast of the latest technologies, processes and advancements throughout the year...`,
    "button":"<span class='text-success font-weight-bold'>Ongoing</span>"
  },
  {
    "heading":"TappiCon 2021",
    "date":"25 - 28 APR 2021",
    "location":"Atlanta, GA USA",
    "content":`TAPPICon will be held in the Spring and Fall - offering you the opportunity
    to stay abreast of the latest technologies, processes and advancements throughout the year...`,
    "button":"<span class='text-danger font-weight-bold'>Past</span>"
  },
  {
    "heading":"TappiCon 2021",
    "date":"25 - 28 APR 2021",
    "location":"Atlanta, GA USA",
    "content":`TAPPICon will be held in the Spring and Fall - offering you the opportunity
    to stay abreast of the latest technologies, processes and advancements throughout the year...`,
    "button":"<span class='text-success font-weight-bold'>Ongoing</span>"
  }]
  eventsArray: any;
  sortArry: any = [];
  constructor(private _events:EventsService) { }

  ngOnInit(): void {
    window.scroll(0,0);

    this._events.getEvents().then(res => {
      res.subscribe((resp:any) => {
        // console.log(resp.data);
        this.eventsArray = resp.data;
        console.log(this.eventsArray );
        

        
      })
    })
  }

  sortEvent(type:string){
    console.log(type);
 

    this.sortArry = [];

    // this.eventsArray.find(elem =>{

    //   console.log();
      

    // })

    this.sortArry.push( this.eventsArray.find(elem => {
    if(elem.type == type)
    return elem.type
  }))

  this.eventsArray = [];
    console.log(this.sortArry)
    
  }

}
