import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SolutionSubCategoryService } from '../services/solution-sub-category.service';
import {FlatTreeControl} from '@angular/cdk/tree';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';
import { NavbarService } from '../navbar.service';
import { SolutionMainCategoryService } from '../services/solution-main-category.service';
import { ProductService } from '../services/product.service';


@Component({
  selector: 'app-sub-sub-catagory',
  templateUrl: './sub-sub-catagory.component.html',
  styleUrls: ['./sub-sub-catagory.component.css']
})
export class SubSubCatagoryComponent implements OnInit {

  @ViewChild('tree') tree;
  productId;
  showProductDeatil: boolean = true;
  showComingSoon:boolean = false;
  isLoading:boolean = true;
  productsData:any = [];
  editSection:any;
  heading: any;


    SolutionSubCategory: any[];
  treeName: string;
  catName: any;
  subName: any;
  subSubName: any;
  catNameId: any;
  subNameId: any;
  level: any;
  dropdown: any;
  sideNav: any;

  constructor(
    private _activatedRoute: ActivatedRoute, 
    private _solMainCatService: SolutionMainCategoryService,
    private _proService: ProductService,
    private _subsubcat: SolutionSubCategoryService, 
    private _nav: NavbarService
    ) {
    
    
   }


  ngOnInit(): void {
    window.scroll(0,0);

    this._activatedRoute.params.subscribe(params => {
      this.productId = params['id'];
      console.log(this.productId)
      
      this.getData(this.productId);
      this.getSolutionSub(this.productId)
      // this.isLoading = true;
       
    })

    this._activatedRoute.queryParams.subscribe(params => {
      console.log(params['name']);
      this.treeName = params['subsubname'];

      this.catName =  params['catname']
     this.subName =  params['subname']
     this.subSubName =  params['subsubname']
     this.level =  params['level']
      console.log(this.level);
      
     
     this.catNameId =  params['catId']
     this.subNameId =  params['subnameId']
     this.getData(this.productId);
    //  this.isLoading = true;
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

    // (await this._subsubcat.getSolutionSubCategory(id)).subscribe((resp: any) => {
    //   console.log(resp)
    //   if(resp.data == null || resp.data?.heading.includes('Heading')){
    //     this.showComingSoon = true;
    //     this.isLoading = false;
    //     }else{
    //       this.productsData = resp.data;
    //       this.showComingSoon = false;
    //       this.isLoading = false;
    //       console.log(this.productsData.heading);
          
    //     }
      
    // })

    
      (await this._solMainCatService.getSolutionMainCategory(id)).subscribe(async (resp: any) => {
        console.log(resp)
        this.isLoading = false
        if(resp.data == null){
          (await this._subsubcat.getSolutionSubCategory(id)).subscribe(async (resp: any) => {
            console.log(resp)
            this.isLoading = false
            if(resp.data == null){
              (await this._proService.getProduct(id)).subscribe((resp: any) => {
                console.log(resp)
                this.isLoading = false
                this.productsData = resp.data;
          
              })
            }else this.productsData = resp.data;
          });
        }else this.productsData = resp.data;
      });
    

      
      console.log(this.productsData);
      
      setInterval( () => {
        console.log(this.productsData);
        if( this.productsData == null || this.productsData?.heading?.includes('Heading')){
          this.showComingSoon = true;
        }
      }, 1000)
      
    

    
  }

  async getSolutionSub(id:string){
    this.SolutionSubCategory = [];
    (await this._nav.getproductMainCategory(id)).subscribe( (response:any) => {
      if (response?.status && response?.status == true && response?.data){
        this.SolutionSubCategory = response.data;
 
        // return response.data;
        
      }
        
      else return [];
    })
  }

}
