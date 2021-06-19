import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SolutionSubCategoryService } from '../services/solution-sub-category.service';
@Component({
  selector: 'app-sub-sub-catagory',
  templateUrl: './sub-sub-catagory.component.html',
  styleUrls: ['./sub-sub-catagory.component.css']
})
export class SubSubCatagoryComponent implements OnInit {

  productId;
  showProductDeatil: boolean = true;
  showComingSoon:boolean = false;
  isLoading:boolean = true;
  productsData:any = [];
  editSection:any;
  heading: any;

  constructor(private _activatedRoute: ActivatedRoute , private _subsubcat:SolutionSubCategoryService) { }

  ngOnInit(): void {
    window.scroll(0,0);


    this._activatedRoute.params.subscribe(params => {
      this.productId = params['id'];
      this.getData(this.productId);
       
    })

  
  }

  async getData(id:string){

    (await this._subsubcat.getSolutionSubCategory(id)).subscribe((resp: any) => {
      console.log(resp)
      if(resp.data == null || resp.data?.heading.includes('Heading')){
        this.showComingSoon = true;
        this.isLoading = false;
        }else{
          this.productsData = resp.data;
          this.showComingSoon = false;
          this.isLoading = false;
          console.log(this.productsData.heading);
          
        }
      
    })

    
  }

}
