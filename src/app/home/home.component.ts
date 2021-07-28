import { Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { NewsService } from '../services/news.service';
import { TestimonialService } from '../services/testimonial.service';
import { MapService } from '../services/map.service';
import { SubscribeService } from '../services/subscribe.service';
import { HomeService } from '../services/home.service';
import { TestimonialDetailComponent } from '../testimonial-detail/testimonial-detail.component';
import {MatDialog} from '@angular/material/dialog';
import { SeeWhatWeDoService } from '../services/see-what-we-do.service';
import { ContactService } from '../services/contact.service';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChild('countries') countries;
  dirName : String;
  loader:boolean = false;
  selectedCountries:any = [];
  homeCarasoul:any = [];
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 1,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 3
      }
    },
    // nav: true
  }

  // news: any = [
  //   {
  //     id: 1,
  //     heading: "BTG introduces MACSash™, an attractive return on investment solution to optimize paper quality 1",
  //     description: `MACSashTM is an innovative solution that combines model predictive control, innovative measurements and support services. The integrated solution stabilizes ash levels in the wet end of the papermaking process resulting in reduced filler variability in the final sheet. The solution can be implemented in packaging as well as printing and writing applications.

  //     Additional demonstrated benefits of MACSashTM include increased machine speeds, reduced chemical costs, as well as a reduction of web breaks and quality variability – generating further economic benefit for the mill.

  //     MACSashTM has recently been implemented at Brigl & Bergmeister at Niklasdorf. The benefits delivered by the solution has resulted in a return on the investments in eight (8) months. ”Thanks to MACSash, we have transformed our operations, stabilizing our ash content and getting a better quality of our paper for the full satisfaction of our customers. We are thankful to the BTG specialists with whom we had outstanding collaboration with during the entire project.” says Ing. DI (FH) Michael Leisenberger, Head of Production.

  //     In the specific case of the Brigl & Bergmeister project, MACSashTM was primarily implemented remotely during the COVID-19 pandemic. This flexibility enables producers to initiate an attractive payback project in these challenging times.`,

  //     broucher: "BTG SurfMAX brochure",
  //     download: "BTG Press Release – PR_SurfMAX_EN_20200616"
  //   },
  //   {
  //     id: 2,
  //     heading: "BTG introduces MACSash™, an attractive return on investment solution to optimize paper quality 2",
  //     description: `MACSashTM is an innovative solution that combines model predictive control, innovative measurements and support services. The integrated solution stabilizes ash levels in the wet end of the papermaking process resulting in reduced filler variability in the final sheet. The solution can be implemented in packaging as well as printing and writing applications.

  //     Additional demonstrated benefits of MACSashTM include increased machine speeds, reduced chemical costs, as well as a reduction of web breaks and quality variability – generating further economic benefit for the mill.

  //     MACSashTM has recently been implemented at Brigl & Bergmeister at Niklasdorf. The benefits delivered by the solution has resulted in a return on the investments in eight (8) months. ”Thanks to MACSash, we have transformed our operations, stabilizing our ash content and getting a better quality of our paper for the full satisfaction of our customers. We are thankful to the BTG specialists with whom we had outstanding collaboration with during the entire project.” says Ing. DI (FH) Michael Leisenberger, Head of Production.

  //     In the specific case of the Brigl & Bergmeister project, MACSashTM was primarily implemented remotely during the COVID-19 pandemic. This flexibility enables producers to initiate an attractive payback project in these challenging times.`,

  //     broucher: "BTG SurfMAX brochure",
  //     download: "BTG Press Release – PR_SurfMAX_EN_20200616"
  //   },
  //   {
  //     id: 3,
  //     heading: "BTG introduces MACSash™, an attractive return on investment solution to optimize paper quality 3",
  //     description: `MACSashTM is an innovative solution that combines model predictive control, innovative measurements and support services. The integrated solution stabilizes ash levels in the wet end of the papermaking process resulting in reduced filler variability in the final sheet. The solution can be implemented in packaging as well as printing and writing applications.

  //     Additional demonstrated benefits of MACSashTM include increased machine speeds, reduced chemical costs, as well as a reduction of web breaks and quality variability – generating further economic benefit for the mill.

  //     MACSashTM has recently been implemented at Brigl & Bergmeister at Niklasdorf. The benefits delivered by the solution has resulted in a return on the investments in eight (8) months. ”Thanks to MACSash, we have transformed our operations, stabilizing our ash content and getting a better quality of our paper for the full satisfaction of our customers. We are thankful to the BTG specialists with whom we had outstanding collaboration with during the entire project.” says Ing. DI (FH) Michael Leisenberger, Head of Production.

  //     In the specific case of the Brigl & Bergmeister project, MACSashTM was primarily implemented remotely during the COVID-19 pandemic. This flexibility enables producers to initiate an attractive payback project in these challenging times.`,

  //     broucher: "BTG SurfMAX brochure",
  //     download: "BTG Press Release – PR_SurfMAX_EN_20200616"
  //   },
  //   {
  //     id: 4,
  //     heading: "BTG introduces MACSash™, an attractive return on investment solution to optimize paper quality 3",
  //     description: `MACSashTM is an innovative solution that combines model predictive control, innovative measurements and support services. The integrated solution stabilizes ash levels in the wet end of the papermaking process resulting in reduced filler variability in the final sheet. The solution can be implemented in packaging as well as printing and writing applications.

  //     Additional demonstrated benefits of MACSashTM include increased machine speeds, reduced chemical costs, as well as a reduction of web breaks and quality variability – generating further economic benefit for the mill.

  //     MACSashTM has recently been implemented at Brigl & Bergmeister at Niklasdorf. The benefits delivered by the solution has resulted in a return on the investments in eight (8) months. ”Thanks to MACSash, we have transformed our operations, stabilizing our ash content and getting a better quality of our paper for the full satisfaction of our customers. We are thankful to the BTG specialists with whom we had outstanding collaboration with during the entire project.” says Ing. DI (FH) Michael Leisenberger, Head of Production.

  //     In the specific case of the Brigl & Bergmeister project, MACSashTM was primarily implemented remotely during the COVID-19 pandemic. This flexibility enables producers to initiate an attractive payback project in these challenging times.`,

  //     broucher: "BTG SurfMAX brochure",
  //     download: "BTG Press Release – PR_SurfMAX_EN_20200616"
  //   }
  // ];

  newsArray:any;
  testArray:any;


  customOptions2: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 10,
    navText: ['', ''],
    responsive: {
      0: {
        items: 2
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 6
      }
    },
    // nav: true
  }
  seeArray: any;
  contactArray: any;
  emailSub: any;

  constructor(private _sub:SubscribeService ,  private _contact : ContactService,private _sanitizer: DomSanitizer,private _see:SeeWhatWeDoService,public dialog: MatDialog,private _new:NewsService,  private _testimoinal:TestimonialService,private _map:MapService, private _home:HomeService) { }

  ngOnInit(): void {
    window.scroll(0,0);



    this._new.getAllNews().then(res => {
      res.subscribe((resp:any) => {
        //
        this.newsArray = resp.data;




      })
    })

    this._testimoinal.getAllTest().then(res => {
      res.subscribe((resp:any) => {
        // console.log(resp.data);
        this.testArray = resp.data;




      })
    })

    this._home.getCarosoul().then(res => {
      res.subscribe((resp:any) => {
        this.loader = false;

        this.homeCarasoul = resp.data;

        // this.testArray = resp.data;
        // console.log(this.testArray );



      })
    })

    this._see.getWhatWeDo().then(res => {
      res.subscribe((resp:any) => {
        this.loader = false;

         this.seeArray = resp.data;

//          this.seeArray = this.seeArray.sort(function(a,b){
//           return ((a['create_date'] > b['create_date']) ? -1 : ((a['create_date'] < b['create_date']) ? 1 : 0));
//         });
// console.log(this.seeArray);


      })
    })






  }


  onKey(e){
    this.emailSub = e.target.value;
  }

  async Subscribe(){
    (await this._sub._subscribe({type:"0" , email:this.emailSub , url:null})).subscribe((res:any) =>{
      console.warn(res);

    })
  }

  sanitize(url){

    return this._sanitizer.bypassSecurityTrustResourceUrl(url.replace("watch?v=" , "embed/"))

  }




  openDialog(id:string){


    const dialogRef = this.dialog.open(TestimonialDetailComponent , {

      data: {id}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });

  }


  addActiveClass(event){
    console.log(event.srcElement.classList);
    event.srcElement.classList.add('active');


  }

  async ngAfterViewInit(){
    await this.initMap(this._map);
  }

  async initMap(map){




    console.log(this.countries.nativeElement);

    var countryElements = this.countries.nativeElement.childNodes;
    var countryCount = countryElements.length;
    (await map.getMap()).subscribe( (res:any) => {
      console.log(res);
      this.selectedCountries = res.data;
       this.selectedCountries.forEach(element => {
         console.log(element.name);
         for (var i = 0; i < countryCount; i++){
          let country = countryElements[i].getAttribute('data-name');
          if( country == element.name ){
            countryElements[i].style.fill = "#465354";
          }
        }
       });

    console.log(this.selectedCountries);

  })




  }



}











