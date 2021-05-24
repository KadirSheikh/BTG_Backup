import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-subcatagories',
  templateUrl: './subcatagories.component.html',
  styleUrls: ['./subcatagories.component.css']
})
export class SubcatagoriesComponent implements OnInit {

  data:any = [{
    "heading":"Consistency Control",
    "subheading":"Optimize pulp & paper productivity through accurate consistency management as fundamental for improved economic benefits."
  },
  {
    "heading":"Creping"
  },
  {
    "heading":"Operational Safety"
  }]

  catName:any;
  subCatName:any;

  constructor(private _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    window.scroll(0,0);
    this._activatedRoute.queryParams.subscribe(params => {
      this.catName = params['catname'];
      this.subCatName = params['subname'];

      // console.log(this.catName);
      
      // console.log(this.subCatName);

      
    })
  }

}
