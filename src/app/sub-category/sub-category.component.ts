import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SolutionSubCategoryService } from '../services/solution-sub-category.service';

@Component({
  selector: 'app-sub-category',
  templateUrl: './sub-category.component.html',
  styleUrls: ['./sub-category.component.css']
})
export class SubCategoryComponent implements OnInit {

  productId;
  showProductDeatil: boolean = true;
  showComingSoon:boolean = false;
  isLoading:boolean = true;
  productsData:any = [];
  editSection:any;
  heading: any;
  
  constructor(
    private _activatedRoute: ActivatedRoute, 
    private _subCatService: SolutionSubCategoryService
  ) { }

  ngOnInit(): void {
    window.scroll(0,0);


    this._activatedRoute.params.subscribe(params => {
      this.productId = params['id'];
      this.getData(this.productId);
       
    })

    console.log(this.isLoading);
    
  }

  async getData(id:string){

    (await this._subCatService.getSolutionSubCategory(id)).subscribe((resp: any) => {
      console.log(resp)
      if(resp.data == null || resp.data.heading == "Heading"){
        this.showComingSoon = true;
        this.isLoading = false;
        }else{
          this.productsData = resp.data;
          this.showComingSoon = false;
          this.isLoading = false;
          console.log(this.productsData.heading);
          
        }
        console.log(this.isLoading);
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
