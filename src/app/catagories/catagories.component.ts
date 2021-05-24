import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-catagories',
  templateUrl: './catagories.component.html',
  styleUrls: ['./catagories.component.css']
})
export class CatagoriesComponent implements OnInit {

  data: any = [{
    "heading": "Tissue",
    "subheading": "Trusted tissue solutions transforming efficiency, productivity and profitability.",
    "para1": "In today’s highly competitive and ever changing environment, complementary solutions from BTG including digital solutions, high performance blade technology and market-leading instrumentation help tissue set benchmarks for performance and cost",
    "para2": "At BTG, we combine in-depth process knowledge with a multidisciplinary approach to develop solutions in response to customers’ real-life needs. That is why tissue makers around the globe often ask us to solve persistent problems throughout their production process. Localized problems can have complex origins. A holistic approach reveals that the root cause of many issues that surface during creping is to be found earlier in the process. Treated correctly, these can be remedied and even eliminated so that your entire process runs smoothly, efficiently and with lowest Total Cost of Operation.",
    "img1": "../../../assets/pyramid.gif",
    "img2": "../../../assets/Pyramid/lev1.gif",
    "img3": "../../../assets/Pyramid/lev2.gif",
    "img4": "../../../assets/Pyramid/lev3.gif",
    "img5": "../../../assets/Pyramid/lev4.gif"
  },
  {
    "heading": "Pulp 4.0"
  }
]

  itemImageUrl = '../../../assets/pyramid.gif';

  catName: any;

  constructor(private _activatedRoute: ActivatedRoute) {

  }

  ngOnInit(): void {

    window.scroll(0,0);

    this._activatedRoute.queryParams.subscribe(params => {
      this.catName = params['name']
      console.log(this.catName);
    })


  

  }


}
