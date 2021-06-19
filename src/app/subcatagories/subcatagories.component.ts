import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SolutionMainCategoryService } from '../services/solution-main-category.service';
import { SolutionSubCategoryService } from '../services/solution-sub-category.service';

@Component({
  selector: 'app-subcatagories',
  templateUrl: './subcatagories.component.html',
  styleUrls: ['./subcatagories.component.css']
})
export class SubcatagoriesComponent implements OnInit {

  productId;
  showProductDeatil: boolean = true;
  showComingSoon:boolean = false;
  isLoading:boolean = true;
  productsData:any = [];
  editSection:any;
  heading: any;
  
  constructor(
    private _activatedRoute: ActivatedRoute, 
    private _subCatService: SolutionSubCategoryService,
    private _solMainCatService: SolutionMainCategoryService
  ) { }

  ngOnInit(): void {
    window.scroll(0,0);


    this._activatedRoute.params.subscribe(params => {
      this.productId = params['id'];
      console.log(this.productId);
      
      this.getData(this.productId);
       
    })

  
  }

  async getData(id:string){

    (await this._solMainCatService.getSolutionMainCategory(id)).subscribe((resp: any) => {
      console.log(resp)
      if(resp.data == null || resp.data?.heading.includes('Heading')){
       
        
        this.showComingSoon = true;
        this.isLoading = false;
        }else{
          this.productsData = resp.data;
          this.showComingSoon = false;
          this.isLoading = false;
          console.log(this.productsData);
          
        }
      
    })

    // this._navService.getProductMainCategoryData(id).then((res) => {
    //   res.subscribe((resp:any)=> {
    //     if(resp.data == null || resp.data.heading == "Enter Product Name Here..."){
    //     this.showComingSoon = true;
    //     this.isLoading = false;
    //     }else{
    //       this.productsData = resp.data;
    //       this.showComingSoon = false;
    //       this.isLoading = false;
    //       console.log(this.productsData.heading); 
    //     }
        
    //   })
    // })
  }



}
