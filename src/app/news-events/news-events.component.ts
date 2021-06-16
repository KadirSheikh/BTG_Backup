import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsService } from '../services/news.service';
@Component({
  selector: 'app-news-events',
  templateUrl: './news-events.component.html',
  styleUrls: ['./news-events.component.css']
})
export class NewsEventsComponent implements OnInit {
  newsArray:any;
  singleNewArray:any;
  hiddenSection : boolean = false
  dataId = 0;
  loader:boolean = true;
  constructor(private activatedRoute: ActivatedRoute,private _new:NewsService) { }

  ngOnInit(): void {
    window.scroll(0,0);
    this.activatedRoute.params.subscribe(params => {
      // console.error(params['id']); // Prints {id: "2"}

      if(params['id'] != undefined){
        this.hiddenSection = true
        // alert("indised")
        this.dataId = params['id'];
      
        console.log(this.dataId);
        
        // this.getNews(this.dataId)
        
        
      }
    });

    this._new.getAllNews().then(res => {
      res.subscribe((resp:any) => {
        // console.log(resp.data);
        this.loader = false;
        this.newsArray = resp.data;
        console.log(this.newsArray );
        

        
      })
    })
  }






 
  }


  
