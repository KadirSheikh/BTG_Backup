import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-news-events',
  templateUrl: './news-events.component.html',
  styleUrls: ['./news-events.component.css']
})
export class NewsEventsComponent implements OnInit {

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
      heading: "BTG introduces MACSash™, an attractive return on investment solution to optimize paper quality 4",
      description: `MACSashTM is an innovative solution that combines model predictive control, innovative measurements and support services. The integrated solution stabilizes ash levels in the wet end of the papermaking process resulting in reduced filler variability in the final sheet. The solution can be implemented in packaging as well as printing and writing applications.

      Additional demonstrated benefits of MACSashTM include increased machine speeds, reduced chemical costs, as well as a reduction of web breaks and quality variability – generating further economic benefit for the mill.
      
      MACSashTM has recently been implemented at Brigl & Bergmeister at Niklasdorf. The benefits delivered by the solution has resulted in a return on the investments in eight (8) months. ”Thanks to MACSash, we have transformed our operations, stabilizing our ash content and getting a better quality of our paper for the full satisfaction of our customers. We are thankful to the BTG specialists with whom we had outstanding collaboration with during the entire project.” says Ing. DI (FH) Michael Leisenberger, Head of Production.
      
      In the specific case of the Brigl & Bergmeister project, MACSashTM was primarily implemented remotely during the COVID-19 pandemic. This flexibility enables producers to initiate an attractive payback project in these challenging times.`,

      broucher: "BTG SurfMAX brochure",
      download: "BTG Press Release – PR_SurfMAX_EN_20200616"
    },
    {
      id: 5,
      heading: "BTG introduces MACSash™, an attractive return on investment solution to optimize paper quality 5",
      description: `MACSashTM is an innovative solution that combines model predictive control, innovative measurements and support services. The integrated solution stabilizes ash levels in the wet end of the papermaking process resulting in reduced filler variability in the final sheet. The solution can be implemented in packaging as well as printing and writing applications.

      Additional demonstrated benefits of MACSashTM include increased machine speeds, reduced chemical costs, as well as a reduction of web breaks and quality variability – generating further economic benefit for the mill.
      
      MACSashTM has recently been implemented at Brigl & Bergmeister at Niklasdorf. The benefits delivered by the solution has resulted in a return on the investments in eight (8) months. ”Thanks to MACSash, we have transformed our operations, stabilizing our ash content and getting a better quality of our paper for the full satisfaction of our customers. We are thankful to the BTG specialists with whom we had outstanding collaboration with during the entire project.” says Ing. DI (FH) Michael Leisenberger, Head of Production.
      
      In the specific case of the Brigl & Bergmeister project, MACSashTM was primarily implemented remotely during the COVID-19 pandemic. This flexibility enables producers to initiate an attractive payback project in these challenging times.`,

      broucher: "BTG SurfMAX brochure",
      download: "BTG Press Release – PR_SurfMAX_EN_20200616"
    },
    {
      id: 6,
      heading: "BTG introduces MACSash™, an attractive return on investment solution to optimize paper quality 6",
      description: `MACSashTM is an innovative solution that combines model predictive control, innovative measurements and support services. The integrated solution stabilizes ash levels in the wet end of the papermaking process resulting in reduced filler variability in the final sheet. The solution can be implemented in packaging as well as printing and writing applications.

      Additional demonstrated benefits of MACSashTM include increased machine speeds, reduced chemical costs, as well as a reduction of web breaks and quality variability – generating further economic benefit for the mill.
      
      MACSashTM has recently been implemented at Brigl & Bergmeister at Niklasdorf. The benefits delivered by the solution has resulted in a return on the investments in eight (8) months. ”Thanks to MACSash, we have transformed our operations, stabilizing our ash content and getting a better quality of our paper for the full satisfaction of our customers. We are thankful to the BTG specialists with whom we had outstanding collaboration with during the entire project.” says Ing. DI (FH) Michael Leisenberger, Head of Production.
      
      In the specific case of the Brigl & Bergmeister project, MACSashTM was primarily implemented remotely during the COVID-19 pandemic. This flexibility enables producers to initiate an attractive payback project in these challenging times.`,

      broucher: "BTG SurfMAX brochure",
      download: "BTG Press Release – PR_SurfMAX_EN_20200616"
    },
    {
      id: 7,
      heading: "BTG introduces MACSash™, an attractive return on investment solution to optimize paper quality 7",
      description: `MACSashTM is an innovative solution that combines model predictive control, innovative measurements and support services. The integrated solution stabilizes ash levels in the wet end of the papermaking process resulting in reduced filler variability in the final sheet. The solution can be implemented in packaging as well as printing and writing applications.

      Additional demonstrated benefits of MACSashTM include increased machine speeds, reduced chemical costs, as well as a reduction of web breaks and quality variability – generating further economic benefit for the mill.
      
      MACSashTM has recently been implemented at Brigl & Bergmeister at Niklasdorf. The benefits delivered by the solution has resulted in a return on the investments in eight (8) months. ”Thanks to MACSash, we have transformed our operations, stabilizing our ash content and getting a better quality of our paper for the full satisfaction of our customers. We are thankful to the BTG specialists with whom we had outstanding collaboration with during the entire project.” says Ing. DI (FH) Michael Leisenberger, Head of Production.
      
      In the specific case of the Brigl & Bergmeister project, MACSashTM was primarily implemented remotely during the COVID-19 pandemic. This flexibility enables producers to initiate an attractive payback project in these challenging times.`,

      broucher: "BTG SurfMAX brochure",
      download: "BTG Press Release – PR_SurfMAX_EN_20200616"
    },
    {
      id: 8,
      heading: "BTG introduces MACSash™, an attractive return on investment solution to optimize paper quality 8",
      description: `MACSashTM is an innovative solution that combines model predictive control, innovative measurements and support services. The integrated solution stabilizes ash levels in the wet end of the papermaking process resulting in reduced filler variability in the final sheet. The solution can be implemented in packaging as well as printing and writing applications.

      Additional demonstrated benefits of MACSashTM include increased machine speeds, reduced chemical costs, as well as a reduction of web breaks and quality variability – generating further economic benefit for the mill.
      
      MACSashTM has recently been implemented at Brigl & Bergmeister at Niklasdorf. The benefits delivered by the solution has resulted in a return on the investments in eight (8) months. ”Thanks to MACSash, we have transformed our operations, stabilizing our ash content and getting a better quality of our paper for the full satisfaction of our customers. We are thankful to the BTG specialists with whom we had outstanding collaboration with during the entire project.” says Ing. DI (FH) Michael Leisenberger, Head of Production.
      
      In the specific case of the Brigl & Bergmeister project, MACSashTM was primarily implemented remotely during the COVID-19 pandemic. This flexibility enables producers to initiate an attractive payback project in these challenging times.`,

      broucher: "BTG SurfMAX brochure",
      download: "BTG Press Release – PR_SurfMAX_EN_20200616"
    },
    {
      id: 9,
      heading: "BTG introduces MACSash™, an attractive return on investment solution to optimize paper quality 9",
      description: `MACSashTM is an innovative solution that combines model predictive control, innovative measurements and support services. The integrated solution stabilizes ash levels in the wet end of the papermaking process resulting in reduced filler variability in the final sheet. The solution can be implemented in packaging as well as printing and writing applications.

      Additional demonstrated benefits of MACSashTM include increased machine speeds, reduced chemical costs, as well as a reduction of web breaks and quality variability – generating further economic benefit for the mill.
      
      MACSashTM has recently been implemented at Brigl & Bergmeister at Niklasdorf. The benefits delivered by the solution has resulted in a return on the investments in eight (8) months. ”Thanks to MACSash, we have transformed our operations, stabilizing our ash content and getting a better quality of our paper for the full satisfaction of our customers. We are thankful to the BTG specialists with whom we had outstanding collaboration with during the entire project.” says Ing. DI (FH) Michael Leisenberger, Head of Production.
      
      In the specific case of the Brigl & Bergmeister project, MACSashTM was primarily implemented remotely during the COVID-19 pandemic. This flexibility enables producers to initiate an attractive payback project in these challenging times.`,

      broucher: "BTG SurfMAX brochure",
      download: "BTG Press Release – PR_SurfMAX_EN_20200616"
    }
  ];

  hiddenSection : boolean = false
  dataId = 0;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    window.scroll(0,0);
    this.activatedRoute.params.subscribe(params => {
      // console.error(params['id']); // Prints {id: "2"}

      if(params['id'] != undefined){
        this.hiddenSection = true
        // alert("indised")
        this.dataId = params['id'];
        this.dataId = this.dataId-1;
        console.log(this.dataId);
        
        
        
      }
    });
  }
  }


