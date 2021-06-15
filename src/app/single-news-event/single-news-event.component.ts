import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsService } from '../services/news.service';

@Component({
  selector: 'app-single-news-event',
  templateUrl: './single-news-event.component.html',
  styleUrls: ['./single-news-event.component.css']
})
export class SingleNewsEventComponent implements OnInit {
  dataId: any;
  singleNewArray: any;
  newsArray: any;

  constructor(private activatedRoute: ActivatedRoute,private _new:NewsService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {


        this.dataId = params['id'];
      
        console.log(this.dataId);
        
        this.getNews(this.dataId)
        
        
      
    });

    this._new.getAllNews().then(res => {
      res.subscribe((resp:any) => {
        // console.log(resp.data);
        this.newsArray = resp.data;
        console.log(this.newsArray );
        

        
      })
    })
  }

  getNews(id:any) {
    
    this._new.getOneNews(id).then(res => {
      res.subscribe((resp:any) => {

        this.singleNewArray = resp.data;
        console.log(this.singleNewArray);
        

        
      })
    })
  }

}
