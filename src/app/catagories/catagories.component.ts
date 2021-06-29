import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FlatTreeControl } from '@angular/cdk/tree';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
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
  selector: 'app-catagories',
  templateUrl: './catagories.component.html',
  styleUrls: ['./catagories.component.css']
})
export class CatagoriesComponent implements OnInit {
  // loader:boolean = true;

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
  catid: any;
  treeName: string;

  constructor(private _activatedRoute: ActivatedRoute, private _nav: NavbarService) {
    this.dataSource.data = this.tree_data;

  }

  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;

  ngOnInit(): void {

    window.scroll(0, 0);

    this._activatedRoute.queryParams.subscribe(params => {
      this.catName = params['name'];
      this.catid = params['id'];
      console.log(this.catName);

      this.getSolutionSub(this.catid)
      setTimeout(() => {
        this.tree_data.forEach(e => {
          if (e._id == 1) {
            e.children = this.SolutionSubCategory;
            e.name = this.catName
          }
        });
        console.log(this.tree_data);
        this.dataSource.data = this.tree_data;
        // this.isLoading = false;
      }, 1000)
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
                console.log(item.children);
                

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
