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

    })

      ; (await this._datasheet.getCategories(this.productId)).subscribe((res: any) => {
        console.log(res)
        this.dataSheetCategories = res?.data
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
        this.dataSheet = res.data
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

}
