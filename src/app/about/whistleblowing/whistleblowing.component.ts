import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-whistleblowing',
  templateUrl: './whistleblowing.component.html',
  styleUrls: ['./whistleblowing.component.css']
})
export class WhistleblowingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.scroll(0,0);
  }

}
