import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SolutionMainCategoryService } from '../services/solution-main-category.service';
import { SolutionSubCategoryService } from '../services/solution-sub-category.service';
import {FlatTreeControl} from '@angular/cdk/tree';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';
import { NavbarService } from '../navbar.service'



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
  treeName:any;

 
  @ViewChild('dropdown') dropdown: ElementRef;

  SolutionSubCategory: any[];
  catName: any;
  catNameId: any;
  level: any;
  sideNav: any;
  
  
  constructor(
    private _activatedRoute: ActivatedRoute, 
    private _subCatService: SolutionSubCategoryService,
    private _solMainCatService: SolutionMainCategoryService,
    private _nav: NavbarService
    
  ) {
   
   }

   

  ngOnInit(): void {
    window.scroll(0,0);


    // console.log(TREE_DATA.find( e =>  e.children.? == 5));

    this._activatedRoute.params.subscribe(params => {
      this.productId = params['id'];
      console.log(this.productId);
      
      this.getData(this.productId);
      this.getSolutionSub(this.productId)

       
    });

    this._activatedRoute.queryParams.subscribe(params => {
       console.log(params['subname']);
       this.catName =  params['catname'];
       this.catNameId =  params['catId'];
       this.treeName = params['subname'];
       this.level = params['level'];
       
    })

  
  }



  ngAfterViewInit() {
    console.log('Values on ngAfterViewInit():');
    console.log("title:", this.dropdown);
    let sNav = JSON.parse(localStorage.getItem('navbar'));
    sNav.forEach(element => {
      // console.log(element);
      
      if( element._id == this.catNameId ){
        this.sideNav = element;
      }
    });
    console.log(this.sideNav.children);
    
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


  async getSolutionSub(id:string){

    this.SolutionSubCategory = [];
    
    (await this._nav.getsolutionSubCategoryFor(id)).subscribe( (response:any) => {
      if (response?.status && response?.status == true && response?.data){
        this.SolutionSubCategory = response.data;
        this.SolutionSubCategory.forEach(async e => {
          (await this._nav.getproductMainCategory(e._id)).subscribe((res:any) => {
            console.log(res.data);
            e.children = res?.data;
            
          })
        })
        // return response.data;
        
      }
        
      else return [];
    })
  }

 
  


}
