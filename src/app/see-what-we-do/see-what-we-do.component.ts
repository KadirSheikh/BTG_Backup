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

    if( url.includes('youtube') ){
      return this.urlSanitize(url);
    }
    return this._sanitizer.bypassSecurityTrustResourceUrl(url)

  }
  getId(url) {
    const regExp = /^.(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]).*/;
    const match = url.match(regExp);

    return (match && match[2].length === 11)
      ? match[2]
      : null;
  }

  urlSanitize(url){
    // console.log(this._sanitizer.bypassSecurityTrustResourceUrl(url));
    
    let videoId;
    if (url != null)
      videoId = this.getId(url);
    else
      videoId = this.getId("https://youtu.be/8PtsKRBgLrA");
    // console.log('Video ID:', `www.youtube.com/embed/${videoId}`)
    // console.warn(`www.youtube.com/embed/${videoId}`)
    let urlParse = this._sanitizer.bypassSecurityTrustResourceUrl((`https://www.youtube.com/embed/${videoId}`).toString())

    let returnUrl = urlParse['changingThisBreaksApplicationSecurity']
    // console.log(returnUrl)
    return urlParse;
  }

}
