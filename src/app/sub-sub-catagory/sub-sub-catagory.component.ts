import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SolutionSubCategoryService } from '../services/solution-sub-category.service';
import {FlatTreeControl} from '@angular/cdk/tree';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';
import { NavbarService } from '../navbar.service';

interface FoodNode {
  _id: any,
  name: string;
  level: number;
  parentId: string;
  order: number;
  children?: FoodNode[];
}

// interface FoodNode {
//   name: string;
//   children?: FoodNode[];
// }

interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}

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
  treeName: string;
  catName: any;
  subName: any;
  subSubName: any;
  catNameId: any;
  subNameId: any;
  level: any;

  constructor(private _activatedRoute: ActivatedRoute , private _subsubcat:SolutionSubCategoryService, private _nav: NavbarService) {
    this.dataSource.data = this.tree_data;
    
   }

   hasChild = (_: number, node: ExampleFlatNode) => node.expandable;
  ngOnInit(): void {
    window.scroll(0,0);

    this._activatedRoute.params.subscribe(params => {
      this.productId = params['id'];
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
       
    })

    this._activatedRoute.queryParams.subscribe(params => {
      console.log(params['name']);
      this.treeName = params['subsubname'];

      this.catName =  params['catname']
     this.subName =  params['subname']
     this.subSubName =  params['subsubname']
     this.level =  params['level']

     
     this.catNameId =  params['catId']
     this.subNameId =  params['subnameId']
     
      
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
