import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sub-sub-catagory',
  templateUrl: './sub-sub-catagory.component.html',
  styleUrls: ['./sub-sub-catagory.component.css']
})
export class SubSubCatagoryComponent implements OnInit {

  catName:any;
  subCatName:any;
  subSubCatName:any;
  constructor(private _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    window.scroll(0,0);
    this._activatedRoute.queryParams.subscribe(params => {
      console.log(params);
      this.catName = params['catname'];
      this.subCatName = params['subname'];
      this.subSubCatName = params['subsubname'];

      
      
      
    })
  }

}
