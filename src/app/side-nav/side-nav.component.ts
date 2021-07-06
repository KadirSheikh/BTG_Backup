import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {

  sideNav: any;
  @ViewChild('dropdown') dropdown: ElementRef;
  @Input('catNameId') catNameId;
  @Input('productId') productId;
  @Input('subNameId') subNameId;

  @Input('catName') catName;
  @Input('subname') subname;
  @Input('level') level;
  constructor() { }

  async ngOnInit() {

    await this.createSideNav();

    console.warn(
      this.catNameId,
      this.productId,
      this.subNameId,
    )
    console.warn(this.catName,
      this.subname,
      this.level)
  }

  createSideNav() {
    console.log('Values on ngAfterViewInit():');
    console.log("title:", this.dropdown);
    let sNav = JSON.parse(localStorage.getItem('navbar'));
    sNav.forEach(element => {
      // console.log(element);

      if (element._id == this.catNameId) {
        this.sideNav = [element];
      }
    });

    console.log(this.sideNav)
  }

  async ngAfterViewInit() {


  }

}
