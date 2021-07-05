import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InstrumentService } from '../services/instrument.service';
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
  selector: 'app-instrument',
  templateUrl: './instrument.component.html',
  styleUrls: ['./instrument.component.css']
})
export class InstrumentComponent implements OnInit {
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

  id: any;
  icon: any;
  row1: any = [];
  row2: any = [];
  row3: any = [];
  row4: any = [];
  name: any;
  subsubnameId: any;
  constructor(
    private _activatedRoute: ActivatedRoute,
    private _instru: InstrumentService,
    private _nav: NavbarService
  ) { }

  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;

  async ngOnInit() {
    window.scroll(0,0);
    
    

    this._activatedRoute.params.subscribe(params => {
      this.productId = params['id'];
      
      // this.getData(this.productId);
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
            this.isLoading = false;
      }, 3000)
       
    })

    this._activatedRoute.queryParams.subscribe(params => {
      // console.log(params['name']);
      this.treeName = params['subsubname'];

      this.catName =  params['catname']
     this.subName =  params['subname']
     this.subSubName =  params['subsubname']
     this.level =  params['level']
      console.log(this.level);
      
     this.subsubnameId = params['subsubnameId']
     this.catNameId =  params['catId']
     this.subNameId =  params['subnameId']
      
   })
   this.getInstrument();
   
  }

  goBack() {
    window.history.back()
  }

  async getInstrument() {
    console.log("%cThis is insumnet page","background:black; color: white; font-size: 36px ");
    // Get Instrument Data
    
    // (await this._instru.getInstrument('60c863a48f264800152a3851')).subscribe((res: any) => {
    //   console.warn(res.data);
    // })

    (await this._instru.getInstrument(this.productId)).subscribe( (res:any) => {
      console.warn(`%c${res}`, "background: cyan");
      if(res?.data == null){
          
        this.showComingSoon = true;
        }else{
          this.productsData = res.data;
          this.showComingSoon = false;
          
          console.log(this.productsData.heading);
          
        }
        this.isLoading = false;
      
      res.data.forEach(e => {
        if( e.row == 1 )
          this.row1.push(e);
        if( e.row == 2 )
          this.row2.push(e);
        if( e.row == 3 )
          this.row3.push(e);
        if( e.row == 4 )
          this.row4.push(e);
      });

      console.warn(this.row1)
      
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
