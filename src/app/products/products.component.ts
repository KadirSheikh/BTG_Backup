import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
import { DownloadsService } from '../services/downloads.service';
import { DatasheetService } from '../services/datasheet.service'
import { MatTabChangeEvent } from '@angular/material/tabs';
import { GlobalConstants } from '../common/global-constant';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { ViewPdfComponent } from '../view-pdf/view-pdf.component';
import { identifierModuleUrl } from '@angular/compiler';
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


interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {


  productId;
  showProductDeatil: boolean = true;
  showComingSoon: boolean = false;
  isLoading: boolean = true;
  productsData: any = [];
  editSection: any;
  heading: any;
  isLoggedIn:boolean;

  dataSheetCategories: any = []
  dataSheet: any = []
  catName: any;
  subName: any;
  subSubName: any;
  pName: any;
  catNameId: any;
  subNameId: any;
  subSubNameId: any;
  level: any;

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

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _proService: ProductService,
    private _datasheet: DatasheetService,
    public gVar : GlobalConstants,
    public dialog: MatDialog,
    private _nav: NavbarService,
    private _dow:DownloadsService) {this.dataSource.data = this.tree_data; }
hasChild = (_: number, node: ExampleFlatNode) => node.expandable;
  async ngOnInit() {
    
    if(this.gVar.isLoggedIn == 'loggedin'){
      this.isLoggedIn = true;
   }else{
     this.isLoggedIn = false;
   }
    // console.log('fuck')
    window.scroll(0, 0);

    this._activatedRoute.params.subscribe(async params => {
      this.productId = params['id'];
      this.getData(this.productId);

    })

    
    this._activatedRoute.queryParams.subscribe(async params => {
     
     this.catName =  params['catname']
     this.subName =  params['subname']
     this.subSubName =  params['subsubname']
     this.pName =  params['pname']
     this.level =  params['level']
      

     this.catNameId =  params['catId']
     this.subNameId =  params['subnameId']
     this.subSubNameId =  params['subsubnameId']

     this.getSolutionSub(this.subNameId)
     setTimeout(()=>{
       this.tree_data.forEach(e => {
         if(e._id == 1){
           e.children = this.SolutionSubCategory;
           e.name = this.pName
         }
       });
           console.log(this.tree_data);
           this.dataSource.data = this.tree_data;
           // this.isLoading = false;
     }, 1000)
     
    })

      ; (await this._datasheet.getCategories(this.productId)).subscribe(async(res: any) => {
       
        this.dataSheetCategories = res?.data;
        (await this._datasheet.getDataSheets(this.dataSheetCategories[0]?.parentId, this.dataSheetCategories[0]?._id)).subscribe((res: any) => {
          // console.log(res)
          this.dataSheet = this.languageSort(res.data)
          // this.languageSort(this.dataSheet);          
        })
      }, (error) => {
        console.log(error)
      })

      

  }

  async tabChanged(tabChangeEvent: MatTabChangeEvent) {
    // console.log('tabChangeEvent => ', tabChangeEvent);
    console.log('index => ', tabChangeEvent.index);

    // console.log(this.categories[tabChangeEvent.index])
    let parentId = this.dataSheetCategories[tabChangeEvent.index].parentId
    let categoryId = this.dataSheetCategories[tabChangeEvent.index]._id

      ; (await this._datasheet.getDataSheets(parentId, categoryId)).subscribe((res: any) => {
        console.log(res)
        this.dataSheet = this.languageSort(res.data)

      })
  }

  getLanguage(lan:any , id:string){
    console.log(JSON.parse(lan.target.value));
    let selectedData = JSON.parse(lan.target.value);
    console.log(id);

    this.dataSheet.forEach(e => {
      if(e.id == id){
        e.selected = selectedData.url
      }
    });

    console.log(this.dataSheet);
    


    
    
  }

  async getData(id: string) {

    (await this._proService.getProduct(id)).subscribe((resp: any) => {

      if (resp.data == null || resp.data?.heading.includes('Heading')) {
        this.showComingSoon = true;
        this.isLoading = false;
      } else {
        this.productsData = resp.data;
        this.showComingSoon = false;
        this.isLoading = false;
        

      }

    })


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



  seeDataSheet(){
    if(this.gVar.isLoggedIn == 'loggedin'){
      this.isLoggedIn = true;
      setTimeout(() => { window.location.reload() }, 100);
      console.log("you are loggedin");

      
   }else{
    //  this.isLoggedIn = false;
    console.log("you are not loggedin");
    const dialogRef = this.dialog.open(LoginComponent, {
      width: '500px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
     
    });
    
   }
  }

  languageSort(arr){
    let newArr = [];
    arr.forEach(e => {
      var name = e.name;
      var id = e._id;
      var sheets = [];
      
      var findArr = newArr.find(f => f.name === name);
      if( !findArr  ){
        // console.log(findArr);
        var findArrS = arr.filter(df => df.name === name);
        newArr.push({
          id:id,
          name: name,
          sheets: findArrS,
          selected:findArrS[0]?.url || ''
        });
      }

    })
    console.log(newArr);
    return newArr;
  }

  async downloads(catId:string , dataId:string){
    let userId =  localStorage.getItem('id');
    console.log(catId , dataId);
    console.log({"categoryId":catId , "dataSheetId":dataId , "userId":userId});

    (await this._dow.dataSheetDownloads({"categoryId":catId , "dataSheetId":dataId , "userId":userId})).subscribe((res:any) => {
      console.log(res);
      
    })
    
    

  }

}
