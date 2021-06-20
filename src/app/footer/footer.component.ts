import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { NavbarService } from '../navbar.service';
import { ContactService } from '../services/contact.service';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  year = new Date().getFullYear();
  industrySolutuonForData: any;
  industrySolutuonMain: any = [];
  contactArray: any;
  constructor(private _contact : ContactService,@Inject(DOCUMENT) private document: Document, private _nav: NavbarService) { }

  async ngOnInit() {
    // Get Industry Solution For
    await this._nav.getSubNav().then((res) => {
      
      res.subscribe((resp: any) => {
        let response1 = resp.data;

        response1.forEach(async element => {

          (await this._nav.getsolutionMainCategoryFor(element._id)).subscribe((resp2:any) => {
  
            
            
            let pushData = {main: element, sub: resp2?.data}
            this.industrySolutuonMain.push(pushData);
            // this.industrySolutuonForData = this.industrySolutuonForData.sort(function(a,b){
            //   return ((a['order'] < b['order']) ? -1 : ((a['order'] > b['order']) ? 1 : 0));
            // });
            // this.industrySolutuonForData.forEach((isd,index) => {
            //   isd.order = index;          
            // });
          })
          
        });

      })
        
      console.log(this.industrySolutuonMain)

    }).catch(error => {
      console.error(error)
    });


    
    this._contact.getContact().then(res => {
      res.subscribe((resp:any) => {
       
        console.log(resp.data);
         this.contactArray = resp.data[0];

        
      
        

        
      })
    })


  }

  doSomething() {
    alert("hello");
  }

}
