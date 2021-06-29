import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SolutionMainCategoryService } from '../services/solution-main-category.service';
import { SolutionSubCategoryService } from '../services/solution-sub-category.service';
import {FlatTreeControl} from '@angular/cdk/tree';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';
import { NavbarService } from '../navbar.service'
interface FoodNode {
  _id: any,
  name: string;
  level: number;
  parentId: string;
  order: number;
  children?: FoodNode[];
}



// const TREE_DATA: FoodNode[] = [
//   {   
//     _id: 1,
//     level: 0,
//     parentId: 'qwertyuiop',
//     order: 0,
//     name: 'Consistance',
//     children: []
//   },
// ];

interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}

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

  tree_data: FoodNode[] = [
    {   
        _id: 1,
        level: 0,
        parentId: '',
        order: 0,
        name: '',
        children: []
      },
    ];
  @ViewChild('dropdown') dropdown: ElementRef;

  private _transformer = (node: FoodNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
    };
  }

  treeControl = new FlatTreeControl<ExampleFlatNode>(
      node => node.level, node => node.expandable);

  treeFlattener = new MatTreeFlattener(
      this._transformer, node => node.level, node => node.expandable, node => node.children);

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);
  SolutionSubCategory: any[];
  
  
  constructor(
    private _activatedRoute: ActivatedRoute, 
    private _subCatService: SolutionSubCategoryService,
    private _solMainCatService: SolutionMainCategoryService,
    private _nav: NavbarService
    
  ) {
    this.dataSource.data = this.tree_data;
   }

   hasChild = (_: number, node: ExampleFlatNode) => node.expandable;

  ngOnInit(): void {
    window.scroll(0,0);


    // console.log(TREE_DATA.find( e =>  e.children.? == 5));

    this._activatedRoute.params.subscribe(params => {
      this.productId = params['id'];
      console.log(this.productId);
      
      this.getData(this.productId);
      this.getSolutionSub(this.productId)
      setTimeout(()=>{
        this.tree_data.forEach(e => {
          if(e._id == 1){
            e.children = this.SolutionSubCategory;
            e.name = this.treeName
          }
        });
            console.log(this.tree_data);
            this.dataSource.data = this.tree_data;
            // this.isLoading = false;
      }, 1000)
       
    });

    this._activatedRoute.queryParams.subscribe(params => {
       console.log(params['name']);
       this.treeName = params['name'];
       
    })

  
  }

  ngAfterViewInit() {
    console.log('Values on ngAfterViewInit():');
    console.log("title:", this.dropdown);
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
