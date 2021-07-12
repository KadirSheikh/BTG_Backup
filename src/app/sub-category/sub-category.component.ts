import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SolutionSubCategoryService } from '../services/solution-sub-category.service';
import { SolutionMainCategoryService } from '../services/solution-main-category.service';
import { ProductService } from '../services/product.service';

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
  level: any;
  
  constructor(
    private _activatedRoute: ActivatedRoute, 
    private _solMainCatService: SolutionMainCategoryService,
    private _proService: ProductService,
    private _subsubcat: SolutionSubCategoryService
  ) { }

  ngOnInit(): void {
    window.scroll(0,0);


    this._activatedRoute.params.subscribe(params => {
      this.productId = params['id'];
      this.level = params['level'];
      console.log(this.productId);
      
      this.getData(this.productId);
       
    })

    console.log(this.isLoading);
    
  }

  async getData(id:string){

   
      (await this._solMainCatService.getSolutionMainCategory(id)).subscribe((resp: any) => {
        console.log(resp)
        if(resp.data == null){
         
          
          
          // this.isLoading = false;
          }else{
            this.productsData = resp.data;
            this.showComingSoon = false;
            // this.isLoading = false;
            console.log(this.productsData);
            
          }
          console.log(this.isLoading);
      });
    


      (await this._subsubcat.getSolutionSubCategory(id)).subscribe((resp: any) => {
        console.log(resp)
        if(resp.data == null || resp.data?.heading.includes('Heading')){
          
          this.isLoading = false;
          }else{
            this.productsData = resp.data;
            this.showComingSoon = false;
            this.isLoading = false;
            console.log(this.productsData.heading);
            
          }
        
      });
    

    
      (await this._proService.getProduct(id)).subscribe((resp: any) => {

        if (resp.data == null || resp.data?.heading.includes('Heading')) {
          
          this.isLoading = false;
        } else {
          this.productsData = resp.data;
          this.showComingSoon = false;
          this.isLoading = false;
          
  
        }
  
      })
    
      if( !this.productsData || this.productsData?.heading?.includes('Heading')){
        this.showComingSoon = true;
      }

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
