import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SolutionMainCategoryService } from '../services/solution-main-category.service';
import { SolutionSubCategoryService } from '../services/solution-sub-category.service';
import {FlatTreeControl} from '@angular/cdk/tree';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';

interface FoodNode {
  _id: any,
  name: string;
  children?: FoodNode[];
}



const TREE_DATA: FoodNode[] = [
{   
    _id: 1,
    name: 'Vegetables',
    children: [
      {
        _id: 2,
        name: 'Green',
        children: [   
          {
            _id: 3,
            name: 'Broccoli'
          },
          {
            _id: 4,
            name: 'Brussels sprouts'
          },
        ]
      }, {
        _id: 5,
        name: 'Orange',
        children: [
          {
            _id: 6,
            name: 'Pumpkins'
          },
          {
            _id: 7,
            name: 'Carrots'
          },
        ]
      },
    ]
  },
];

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
  
  
  constructor(
    private _activatedRoute: ActivatedRoute, 
    private _subCatService: SolutionSubCategoryService,
    private _solMainCatService: SolutionMainCategoryService,
    
  ) {
    this.dataSource.data = TREE_DATA;
   }

   hasChild = (_: number, node: ExampleFlatNode) => node.expandable;

  ngOnInit(): void {
    window.scroll(0,0);


    // console.log(TREE_DATA.find( e =>  e.children.? == 5));

    this._activatedRoute.params.subscribe(params => {
      this.productId = params['id'];
      console.log(this.productId);
      
      this.getData(this.productId);
       
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

  


}
