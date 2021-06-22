import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
import { DatasheetService } from '../services/datasheet.service'
import { MatTabChangeEvent } from '@angular/material/tabs';
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

  dataSheetCategories: any = []
  dataSheet: any = []

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _proService: ProductService,
    private _datasheet: DatasheetService) { }

  async ngOnInit() {
    // console.log('fuck')
    window.scroll(0, 0);

    this._activatedRoute.params.subscribe(async params => {
      this.productId = params['id'];
      this.getData(this.productId);

    }); 
    (await this._datasheet.getCategories(this.productId)).subscribe( async(res: any) => {
        console.log(res)
        this.dataSheetCategories = res?.data;

        (await this._datasheet.getDataSheets(this.dataSheetCategories[0]?.parentId, this.dataSheetCategories[0]?._id)).subscribe((res: any) => {
          // console.log(res)
          this.dataSheet = this.languageSort(res.data);
          console.log(this.dataSheet);
               
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
    let categoryId = this.dataSheetCategories[tabChangeEvent.index]._id; 
    (await this._datasheet.getDataSheets(parentId, categoryId)).subscribe((res: any) => {
        // console.log(res)
        this.dataSheet = this.languageSort(res.data);
        console.log(this.dataSheet);
        
      })
  }

  async getData(id: string) {

    (await this._proService.getProduct(id)).subscribe((resp: any) => {
      console.log(resp)
      if (resp.data == null || resp.data?.heading.includes('Heading')) {
        this.showComingSoon = true;
        this.isLoading = false;
      } else {
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

  languageSort(arr){
    let newArr = [];
    arr.forEach(e => {
      var name = e.name;
      var sheets = [];
      
      var findArr = newArr.find(f => f.name === name);
      if( !findArr  ){
        // console.log(findArr);
        var findArrS = arr.filter(df => df.name === name);
        newArr.push({
          name: name,
          sheets: findArrS
        });}

    })
    console.log(newArr);
    return newArr;
  }

}
