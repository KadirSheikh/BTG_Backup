import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, HostListener, Inject, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { MatSidenav } from '@angular/material/sidenav';
import { NavbarService } from './navbar.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BTG';
  @ViewChild('drawer') drawer: MatSidenav;

  categories = [
    {
      id: 1, category: 'Pulp', subcategory: [
        { id: 1, name: "Fiber Line Solution" },
        { id: 2, name: "Chemical Recovery Solutions",  },
      ]
    }
  ]
  industrySolutuonForData: any;

  constructor(@Inject(DOCUMENT) private document: Document,private breakpointObserver: BreakpointObserver,private _nav: NavbarService) { }
  ngOnInit(): void {
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
          // console.log(response?.data);
        })

        

    }).catch(error => {
      console.error(error)
    });
  }
  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (document.body.scrollTop > 60 ||
      document.documentElement.scrollTop > 60) {
      // console.log('called')
      document.getElementById('nav').classList.add('shadow');

    }

    else if (document.body.scrollTop == 0 || document.documentElement.scrollTop == 0) {
      document.getElementById('nav').classList.remove('shadow');
      console.log('top')

    }
  }

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches),
    shareReplay()
  );

  toggle(){
    this.drawer.toggle();  
 }
}
