import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SolutionMainCategoryService } from '../services/solution-main-category.service';
@Component({
  selector: 'app-main-category',
  templateUrl: './main-category.component.html',
  styleUrls: ['./main-category.component.css']
})
export class MainCategoryComponent implements OnInit {


  productId;
  showProductDeatil: boolean = true;
  showComingSoon:boolean = false;
  isLoading:boolean = true;
  productsData:any = [];
  editSection:any;
  heading: any;

  constructor(
    private _activatedRoute: ActivatedRoute , private _mainCatService: SolutionMainCategoryService
  ) { }

  ngOnInit(): void {
    window.scroll(0,0);


    this._activatedRoute.params.subscribe(params => {
      this.productId = params['id'];
      this.getData(this.productId);
       
    })

  
  }

  async getData(id:string){

    (await this._mainCatService.getSolutionMainCategory(id)).subscribe((resp: any) => {
      console.log(resp)
      if(resp.data == null || resp.data.heading == "Enter Product Name Here..."){
        this.showComingSoon = true;
        this.isLoading = false;
        }else{
          this.productsData = resp.data;
          this.showComingSoon = false;
          this.isLoading = false;
          console.log(this.productsData.heading);
          
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
