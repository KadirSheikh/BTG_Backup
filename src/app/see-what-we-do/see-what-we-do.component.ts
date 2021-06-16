import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { SeeWhatWeDoService } from '../services/see-what-we-do.service';
@Component({
  selector: 'app-see-what-we-do',
  templateUrl: './see-what-we-do.component.html',
  styleUrls: ['./see-what-we-do.component.css']
})
export class SeeWhatWeDoComponent implements OnInit {

  seeArray:any = [];
  loader:boolean = true;
  constructor(private _see:SeeWhatWeDoService,private _sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this._see.getWhatWeDo().then(res => {
      res.subscribe((resp:any) => {
        this.loader = false;
        console.log(resp.data);
         this.seeArray = resp.data;

        
      
        

        
      })
    })
  }

  sanitize(url){
    // console.log(url);
    
        // if( url.includes('youtube') ){
        //   // console.log(this.parseUrl(url));
          
        //   return this.parseUrl(url);
        // }
        return this._sanitizer.bypassSecurityTrustResourceUrl(url.replace("watch?v=" , "embed/"))
    
      }

}
