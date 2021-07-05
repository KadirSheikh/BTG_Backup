import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InstrumentService } from '../services/instrument.service';
import {FlatTreeControl} from '@angular/cdk/tree';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';
import { NavbarService } from '../navbar.service';



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
  dropdown: any;
  sideNav: any;
  constructor(
    private _activatedRoute: ActivatedRoute,
    private _instru: InstrumentService,
    private _nav: NavbarService
  ) { }


  async ngOnInit() {
    window.scroll(0,0);
    
    

    this._activatedRoute.params.subscribe(params => {
      this.productId = params['id'];
      
      // this.getData(this.productId);
      this.getSolutionSub(this.productId)

       
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
