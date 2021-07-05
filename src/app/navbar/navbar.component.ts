import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { NavbarService } from '../navbar.service'
import { LoginComponent } from '../login/login.component';
import { MatDialog } from '@angular/material/dialog';
import { GlobalConstants } from '../common/global-constant';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  mainNavData: any;
  industrySolutuonForData: any;
  isLoggedIn:boolean;
  flag: boolean;

  
  constructor(
    @Inject(DOCUMENT) private document: Document, 
    private _nav: NavbarService,
    public dialog: MatDialog,
    public gVar : GlobalConstants) { }

  ngOnInit(): void {


    if(this.gVar.isLoggedIn == 'loggedin'){
       this.isLoggedIn = true;
    }else{
      this.isLoggedIn = false;
    }

    
    
    

    // Get main Nav content 
    this._nav.getMainNav().then((res) => {
      res.subscribe((response: any) => {
        
        
        if (response?.status && response?.status == true)
          this.mainNavData = response?.data
          console.log(this.mainNavData);
          
      })
    }).catch(error => {
      console.error(error)
    })

    // Get Industry Solution For
    this._nav.getSubNav().then((res) => {
      res.subscribe((response: any) => {
        
        console.log(response.data);
        
        
        if (response?.status && response?.status == true)
          this.industrySolutuonForData = response?.data;
          
          this.industrySolutuonForData = this.industrySolutuonForData.sort(function(a,b){
            return ((a['order'] < b['order']) ? -1 : ((a['order'] > b['order']) ? 1 : 0));
          });
          this.industrySolutuonForData.forEach((isd,index) => {
            isd.order = index;          
          });
          this.testNav().then( async(nav:any) => {
            await console.log(`%c${JSON.stringify(nav)}`,'background-color:yellow');
            
          });
          // console.log(response?.data);
        })

        
        
    }).catch(error => {
      console.error(error)
    });
    
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(LoginComponent, {
      width: '500px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
     
    });
  }

  // decideRoute(id:string , level:number ){
  //   if(level == 2){
  //      return `subcatagory/${id}/${level}`;
  //   }
  // }

  logout(){
    localStorage.setItem('auth-token', ''),
    localStorage.setItem('email', ''),
    localStorage.setItem('id', ''),
    localStorage.setItem('mobile', ''),
    localStorage.setItem('name', '')
    localStorage.setItem('isLoggedIn', '')
    window.location.reload();
  }

  SolutionMainCategoryData: any;

  getSolutionMainCategory(id){
    this.flag = true;
    this.SolutionMainCategoryData = [];
    this._nav.getsolutionMainCategoryFor(id).then((res) => {
      res.subscribe((response: any) => {
        
        console.log(response.data);
        
        if (response?.status && response?.status == true)
        
          this.SolutionMainCategoryData = response?.data
          // console.log(response?.data);
          if(response?.data?.length != 0 || response?.data?.length == 0)
            this.flag = false;
        })
    }).catch(error => {
      console.error(error)
    })
  }

  SolutionSubCategory: any;
  getSolutionSubCategory(id){
    this.flag = true;
    this.SolutionSubCategory = [];
    this._nav.getsolutionSubCategoryFor(id).then((res) => {
      res.subscribe((response: any) => {
        
        console.log(response.data);
        if (response?.status && response?.status == true)
          this.SolutionSubCategory = response?.data
          // console.log(response?.data);
          if(response?.data?.length != 0 || response?.data?.length == 0)
            this.flag = false;
        })
    }).catch(error => {
      console.error(error)
    })
  }

  ProductMainCategory: any;
  getProductMainCategory(id){
    this.flag = true;
    this.ProductMainCategory = [];
    this._nav.getproductMainCategory(id).then((res) => {
      res.subscribe((response: any) => {
        console.log(response.data);
        
        if (response?.status && response?.status == true)
          this.ProductMainCategory = response?.data
          // console.log(response?.data);
          if(response?.data?.length != 0 || response?.data?.length == 0)
            this.flag = false;
        })
    }).catch(error => {
      console.error(error)
    })
  }



// Testing Purpose for Nav
nav:any = [];
async testNav(){
  let sNav = JSON.parse(localStorage.getItem('navbar'));
  if( sNav ){
    this.nav = sNav;
    return;
  }
  this.industrySolutuonForData.forEach(industry => {
    // console.log(industry);
    this.nav.push(industry)
    console.warn('-----------------NAV--------------------------');
    
    console.warn(this.nav);
    
  });
  
  await this.nav.map(async main => {
    main.children = await this.asyncActionMain(main._id);
  });
  console.log(JSON.stringify(this.nav));
  
  return await this.nav;
}

asyncActionMain(id) {
  
  var promise = new Promise((resolve, reject) => {
    this._nav.getsolutionMainCategoryFor(id).then((res) => {
      res.subscribe((response: any) => {
        
        response.data.forEach(async sub => {
          sub.children = await this.asyncActionSub(sub._id);
        });
        console.log('-------------Main-------------');
        console.log(response.data);
        
        resolve(response.data);
        
        // if (response?.status && response?.status == true)
        
        //   this.SolutionMainCategoryData = response?.data
        //   // console.log(response?.data);
        //   if(response?.data?.length != 0 || response?.data?.length == 0)
        //     this.flag = false;
        })
    })
  });
  return promise;
}

asyncActionSub(id) {
  
  var promise = new Promise((resolve, reject) => {
    this._nav.getsolutionSubCategoryFor(id).then((res) => {
      res.subscribe((response: any) => {
        response.data.forEach(async sub => {
          sub.children = await this.asyncActionProduct(sub._id);
        });

        console.log('-------------Sol Sub-------------');
        console.log(response.data);

        resolve(response.data);
        
        // if (response?.status && response?.status == true)
        
        //   this.SolutionMainCategoryData = response?.data
        //   // console.log(response?.data);
        //   if(response?.data?.length != 0 || response?.data?.length == 0)
        //     this.flag = false;
        })
    })
  });
  return promise;
}

asyncActionProduct(id) {
  
  var promise = new Promise((resolve, reject) => {
    this._nav.getproductMainCategory(id).then((res) => {
      res.subscribe((response: any) => {
        
        console.log('-------------Pro Main-------------');
        console.log(response.data);
        localStorage.setItem('navbar', JSON.stringify(this.nav))
        resolve(response.data);
        
        // if (response?.status && response?.status == true)
        
        //   this.SolutionMainCategoryData = response?.data
        //   // console.log(response?.data);
        //   if(response?.data?.length != 0 || response?.data?.length == 0)
        //     this.flag = false;
        })
    })
  });
  console.log(this.nav)
  
  return promise;
}
}