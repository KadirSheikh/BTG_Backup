import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FlatTreeControl } from '@angular/cdk/tree';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { NavbarService } from '../navbar.service';



@Component({
  selector: 'app-catagories',
  templateUrl: './catagories.component.html',
  styleUrls: ['./catagories.component.css']
})
export class CatagoriesComponent implements OnInit {
  // loader:boolean = true;

  SolutionSubCategory: any[];
  data: any = [{
    "heading": "Tissue",
    "subheading": "Trusted tissue solutions transforming efficiency, productivity and profitability.",
    "para1": "In today’s highly competitive and ever changing environment, complementary solutions from BTG including digital solutions, high performance blade technology and market-leading instrumentation help tissue set benchmarks for performance and cost",
    "para2": "At BTG, we combine in-depth process knowledge with a multidisciplinary approach to develop solutions in response to customers’ real-life needs. That is why tissue makers around the globe often ask us to solve persistent problems throughout their production process. Localized problems can have complex origins. A holistic approach reveals that the root cause of many issues that surface during creping is to be found earlier in the process. Treated correctly, these can be remedied and even eliminated so that your entire process runs smoothly, efficiently and with lowest Total Cost of Operation.",
    "img1": "../../../assets/pyramid.gif",
    "img2": "../../../assets/Pyramid/lev1.gif",
    "img3": "../../../assets/Pyramid/lev2.gif",
    "img4": "../../../assets/Pyramid/lev3.gif",
    "img5": "../../../assets/Pyramid/lev4.gif"
  },
  {
    "heading": "Pulp 4.0"
  }
  ]

  itemImageUrl = '../../../assets/pyramid.gif';

  catName: any;
  catNameId: any;
  treeName: string;
  consistencyId: any;
  creepingId: any;
  fmid: any;
  weid: any;
  ysid: any;
  suid: any;
  oaid: any;
  laid: any;
  bwid: any;
  psid: any;
  oiid: any;
  osid: any;
  apcid: any;

  constructor(private _activatedRoute: ActivatedRoute, private _nav: NavbarService) {
    

  }

  

  ngOnInit(): void {

    window.scroll(0, 0);

    this._activatedRoute.queryParams.subscribe(params => {
      this.catName = params['name'];
      console.log(this.catName);
      
      this.catNameId = params['id'];
      console.log(this.catName);
      this.getSolMainName(this.catNameId)

      this.getSolutionSub(this.catNameId)

    })




  }


  async getSolMainName(id: string){
  
      (await this._nav.getsolutionMainCategoryFor(id)).subscribe((res:any) => {
        // console.log(res.data);
        let newArr:any = []
        res.data.forEach(e => {
          var name = e.name;
          var id = e._id;
          newArr.push({name , id})
          // console.log({name , id});
          
        });

        console.log(newArr);
        
        
        newArr.forEach(e => {
          console.log(e);
          if(e.name.includes('Consistency')){
            this.consistencyId = e.id;
          }else if(e.name.includes('Creping')){
            this.creepingId = e.id;
          }else if(e.name.includes('Fiber management')){
            this.fmid = e.id;
          }else if(e.name.includes('Wet-end stability')){
            this.weid = e.id;
          }else if(e.name.includes('Yankee safety')){
            this.ysid = e.id;
          }else if(e.name.includes('Sheet uniformity')){
            this.suid = e.id;
          }else if(e.name.includes('Online Analyzers')){
            this.oaid = e.id;
          }else if(e.name.includes('Laboratory Analyzers')){
            this.laid = e.id;
          }else if(e.name.includes('Basis Weight')){
            this.bwid = e.id;
          }else if(e.name.includes('Performance solutions')){
            this.psid = e.id;
          }else if(e.name.includes('Operational intelligence')){
            this.oiid = e.id;
          }else if(e.name.includes('Operational safety')){
            this.osid = e.id;
          }else if(e.name.includes('Advance Process control')){
            this.apcid = e.id;
          }

          
        });
        console.log(this.consistencyId);
        
        
        
      })
  }



  async getSolutionSub(id: string) {

    

    this.SolutionSubCategory = [];
    (await this._nav.getsolutionMainCategoryFor(id)).subscribe(async (response: any) => {
      if (response?.status && response?.status == true && response?.data) {
        this.SolutionSubCategory = await response.data;
        await Promise.all(this.SolutionSubCategory.map(async (item) => {
          (await this._nav.getsolutionSubCategoryFor(item._id)).subscribe(async(res: any) => {

            item.children = await res?.data;
           
            await Promise.all(item.children.map(async (item) => {
              (await this._nav.getProductMainCategoryData(item._id)).subscribe(async(res:any) => {

                item.children = await res?.data;
                // console.log(item.children);
                

              })
            }))

          })
        }))
        console.log(this.SolutionSubCategory);

       

      }

      else return [];
    })
  }


  

  


}
