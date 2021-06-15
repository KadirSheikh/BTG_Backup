import { Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { NewsService } from '../services/news.service';
import { TestimonialService } from '../services/testimonial.service';
import { MapService } from '../services/map.service';
import { HomeService } from '../services/home.service';
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

  news: any = [
    {
      id: 1,
      heading: "BTG introduces MACSash™, an attractive return on investment solution to optimize paper quality 1",
      description: `MACSashTM is an innovative solution that combines model predictive control, innovative measurements and support services. The integrated solution stabilizes ash levels in the wet end of the papermaking process resulting in reduced filler variability in the final sheet. The solution can be implemented in packaging as well as printing and writing applications.

      Additional demonstrated benefits of MACSashTM include increased machine speeds, reduced chemical costs, as well as a reduction of web breaks and quality variability – generating further economic benefit for the mill.
      
      MACSashTM has recently been implemented at Brigl & Bergmeister at Niklasdorf. The benefits delivered by the solution has resulted in a return on the investments in eight (8) months. ”Thanks to MACSash, we have transformed our operations, stabilizing our ash content and getting a better quality of our paper for the full satisfaction of our customers. We are thankful to the BTG specialists with whom we had outstanding collaboration with during the entire project.” says Ing. DI (FH) Michael Leisenberger, Head of Production.
      
      In the specific case of the Brigl & Bergmeister project, MACSashTM was primarily implemented remotely during the COVID-19 pandemic. This flexibility enables producers to initiate an attractive payback project in these challenging times.`,

      broucher: "BTG SurfMAX brochure",
      download: "BTG Press Release – PR_SurfMAX_EN_20200616"
    },
    {
      id: 2,
      heading: "BTG introduces MACSash™, an attractive return on investment solution to optimize paper quality 2",
      description: `MACSashTM is an innovative solution that combines model predictive control, innovative measurements and support services. The integrated solution stabilizes ash levels in the wet end of the papermaking process resulting in reduced filler variability in the final sheet. The solution can be implemented in packaging as well as printing and writing applications.

      Additional demonstrated benefits of MACSashTM include increased machine speeds, reduced chemical costs, as well as a reduction of web breaks and quality variability – generating further economic benefit for the mill.
      
      MACSashTM has recently been implemented at Brigl & Bergmeister at Niklasdorf. The benefits delivered by the solution has resulted in a return on the investments in eight (8) months. ”Thanks to MACSash, we have transformed our operations, stabilizing our ash content and getting a better quality of our paper for the full satisfaction of our customers. We are thankful to the BTG specialists with whom we had outstanding collaboration with during the entire project.” says Ing. DI (FH) Michael Leisenberger, Head of Production.
      
      In the specific case of the Brigl & Bergmeister project, MACSashTM was primarily implemented remotely during the COVID-19 pandemic. This flexibility enables producers to initiate an attractive payback project in these challenging times.`,

      broucher: "BTG SurfMAX brochure",
      download: "BTG Press Release – PR_SurfMAX_EN_20200616"
    },
    {
      id: 3,
      heading: "BTG introduces MACSash™, an attractive return on investment solution to optimize paper quality 3",
      description: `MACSashTM is an innovative solution that combines model predictive control, innovative measurements and support services. The integrated solution stabilizes ash levels in the wet end of the papermaking process resulting in reduced filler variability in the final sheet. The solution can be implemented in packaging as well as printing and writing applications.

      Additional demonstrated benefits of MACSashTM include increased machine speeds, reduced chemical costs, as well as a reduction of web breaks and quality variability – generating further economic benefit for the mill.
      
      MACSashTM has recently been implemented at Brigl & Bergmeister at Niklasdorf. The benefits delivered by the solution has resulted in a return on the investments in eight (8) months. ”Thanks to MACSash, we have transformed our operations, stabilizing our ash content and getting a better quality of our paper for the full satisfaction of our customers. We are thankful to the BTG specialists with whom we had outstanding collaboration with during the entire project.” says Ing. DI (FH) Michael Leisenberger, Head of Production.
      
      In the specific case of the Brigl & Bergmeister project, MACSashTM was primarily implemented remotely during the COVID-19 pandemic. This flexibility enables producers to initiate an attractive payback project in these challenging times.`,

      broucher: "BTG SurfMAX brochure",
      download: "BTG Press Release – PR_SurfMAX_EN_20200616"
    },
    {
      id: 4,
      heading: "BTG introduces MACSash™, an attractive return on investment solution to optimize paper quality 3",
      description: `MACSashTM is an innovative solution that combines model predictive control, innovative measurements and support services. The integrated solution stabilizes ash levels in the wet end of the papermaking process resulting in reduced filler variability in the final sheet. The solution can be implemented in packaging as well as printing and writing applications.

      Additional demonstrated benefits of MACSashTM include increased machine speeds, reduced chemical costs, as well as a reduction of web breaks and quality variability – generating further economic benefit for the mill.
      
      MACSashTM has recently been implemented at Brigl & Bergmeister at Niklasdorf. The benefits delivered by the solution has resulted in a return on the investments in eight (8) months. ”Thanks to MACSash, we have transformed our operations, stabilizing our ash content and getting a better quality of our paper for the full satisfaction of our customers. We are thankful to the BTG specialists with whom we had outstanding collaboration with during the entire project.” says Ing. DI (FH) Michael Leisenberger, Head of Production.
      
      In the specific case of the Brigl & Bergmeister project, MACSashTM was primarily implemented remotely during the COVID-19 pandemic. This flexibility enables producers to initiate an attractive payback project in these challenging times.`,

      broucher: "BTG SurfMAX brochure",
      download: "BTG Press Release – PR_SurfMAX_EN_20200616"
    }
  ];

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

  constructor(private _new:NewsService,  private _testimoinal:TestimonialService,private _map:MapService, private _home:HomeService) { }

  ngOnInit(): void {
    window.scroll(0,0);
    
    

    this._new.getAllNews().then(res => {
      res.subscribe((resp:any) => {
        // console.log(resp.data);
        this.newsArray = resp.data;
        console.log(this.newsArray );
        

        
      })
    })

    this._testimoinal.getAllTest().then(res => {
      res.subscribe((resp:any) => {
        // console.log(resp.data);
        this.testArray = resp.data;
        console.log(this.testArray );
        

        
      })
    })

    this._home.getCarosoul().then(res => {
      res.subscribe((resp:any) => {
        console.log(resp.data);
        this.homeCarasoul = resp.data;
        // this.testArray = resp.data;
        // console.log(this.testArray );
        

        
      })
    })
  }

  async ngAfterViewInit(){
    await this.initMap(this._map); 
  }

  async initMap(map){

    console.log(this.countries.nativeElement);

    var countryElements = this.countries.nativeElement.childNodes;
    
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
    var countryCount = countryElements.length;
    
    
    for (var i = 0; i < countryCount; i++) {
      let fuck = i;


 
    }
  }

  // ngAfterViewInit(){
  //   console.log(this.countries.nativeElement);

    

  //   var countryElements = this.countries.nativeElement.childNodes;
  //   var countryCount = countryElements.length;
  //   for (var i = 0; i < countryCount; i++) {
  //     let j = i;
  //     countryElements[i].onclick = function() {
  //       // alert('You clicked on ' + this.getAttribute('data-name'));
  //       let cName = this.getAttribute('data-name');
        
  //         countryElements[j].style.fill = "red";
        
  //     }




      
      
  //   }
  // }

}




// selectedCountries:any = [];


//   async addCountry(name){
//     (await this._map.addMap(name)).subscribe( (res:any) => {
//       console.log(res);
//     })
//   }

  // async ngAfterViewInit(){
  //   await this.initMap(this._map); 
  // }

  // async initMap(map){
  //   async function addCountry(name){
  //     (await map.addMap(name)).subscribe( (res:any) => {
  //       console.log(res);
  //     })
  //   }

  //   async function deleteCountry(name){
  //     (await map.deleteMap(name)).subscribe( (res:any) => {
  //       console.log(res);
  //     })
  //   }

  //   console.log(this.countries.nativeElement);

  //   var countryElements = this.countries.nativeElement.childNodes;
    
  //   (await map.getMap()).subscribe( (res:any) => {
  //     console.log(res);
  //     this.selectedCountries = res.data;
  //      this.selectedCountries.forEach(element => {
  //        console.log(element.name);
  //        for (var i = 0; i < countryCount; i++){
  //         let country = countryElements[i].getAttribute('data-name');
  //         if( country == element.name ){
  //           countryElements[i].style.fill = "#465354";
  //         }   
  //       }
  //      });

  //   console.log(this.selectedCountries);
    
  // })
  //   var countryCount = countryElements.length;
    
    
  //   for (var i = 0; i < countryCount; i++) {
  //     let fuck = i;
  //     countryElements[i].onclick = function() {
  //       // alert('You clicked on ' + this.getAttribute('data-name'));
  //       let cName = this.getAttribute('data-name');
  //         if( countryElements[fuck].style.fill == 'rgb(70, 83, 84)' ){
  //           countryElements[fuck].style.fill = "lightgray";
  //           deleteCountry(cName);
  //         }else{
  //           countryElements[fuck].style.fill = "#465354";
            
  //           addCountry(cName);
  //         }
  //         console.log(cName);
          
  //     }
 
  //   }
  // }