import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, HostListener, Inject, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BTG';

  categories = [
    {
      id: 1, category: 'Pulp', subcategory: [
        { id: 1, name: "Fiber Line Solution" },
        { id: 2, name: "Chemical Recovery Solutions",  },
      ]
    }
  ]

  constructor(@Inject(DOCUMENT) private document: Document) { }
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
}
