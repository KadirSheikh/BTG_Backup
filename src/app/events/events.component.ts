import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
    window.scroll(0,0);
  }

}
