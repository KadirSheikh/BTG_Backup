import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, Inject, OnInit, Renderer2, ViewChild } from '@angular/core';
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

  bgImg:  String = "";

  @ViewChild('contactsec') contactsec: ElementRef;
  constructor(private renderer: Renderer2,private _contact : ContactService,@Inject(DOCUMENT) private document: Document, private _nav: NavbarService) { }

  async ngOnInit() {

    

    // this.getContactUs();
   
    // Get Industry Solution For
    await this._nav.getSubNav().then((res) => {
      
      res.subscribe((resp: any) => {
        let response1 = resp.data;

        response1.forEach(async element => {

          (await this._nav.getsolutionMainCategoryFor(element._id)).subscribe((resp2:any) => {
  
            ;
            
            
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
        
      

    }).catch(error => {
      console.error(error)
    });



    


  }



  async ngAfterViewInit(){
  
    (await this._contact.getContact()).subscribe((resp:any) => {
       
     
      
      console.warn(resp.data);
      if(localStorage.getItem('contact-us') == null || localStorage.getItem('contact-us') == undefined){
        this.contactArray = resp.data[0];

        this.bgImg = this.contactArray.image
        this.renderer.setStyle(this.contactsec.nativeElement, 'background-image', `url(${this.bgImg})`);
        return localStorage.setItem('contact-us', JSON.stringify(this.contactArray))
        
      }
      else{
        let data = localStorage.getItem('contact-us')

        this.contactArray = JSON.parse(data)
        this.bgImg = this.contactArray.image
    
        this.renderer.setStyle(this.contactsec.nativeElement, 'background-image', `url(${this.bgImg})`);
      }

      
      
   })

    
  }

  doSomething() {
    alert("hello");
  }

//  async getContactUs(){
//     (await this._contact.getContact()).subscribe((resp:any) => {
       
     
      
//       console.warn(resp.data);
//       if(localStorage.getItem('contact-us') == null || localStorage.getItem('contact-us') == undefined){
//         this.contactArray = resp.data[0];

//         this.bgImg = this.contactArray.image
//         return localStorage.setItem('contact-us', JSON.stringify(this.contactArray))
//       }
//       else{
//         let data = localStorage.getItem('contact-us')

//         this.contactArray = JSON.parse(data)
//         this.bgImg = this.contactArray.image
//     
//       }

      
      
//    })
//   }

}
