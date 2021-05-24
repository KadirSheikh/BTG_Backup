import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { NavbarService } from '../navbar.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  year = new Date().getFullYear();
  industrySolutuonForData: any;
  industrySolutuonMain: any = [];
  constructor(@Inject(DOCUMENT) private document: Document, private _nav: NavbarService) { }

  async ngOnInit() {
    // Get Industry Solution For
    await this._nav.getSubNav().then((res) => {
      
      res.subscribe((resp: any) => {
        let response1 = resp.data;
        response1.forEach(async element => {

          (await this._nav.getsolutionMainCategoryFor(element._id)).subscribe((resp2:any) => {
  
            
            
            let pushData = {main: element, sub: resp2?.data}
            this.industrySolutuonMain.push(pushData)
          })
          
        });

      })
        
      console.log(this.industrySolutuonMain)

    }).catch(error => {
      console.error(error)
    });


    



  }

  doSomething() {
    alert("hello");
  }

}
