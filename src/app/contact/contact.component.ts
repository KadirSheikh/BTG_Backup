import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  hideForm:boolean = true;
  hideDiv:boolean = true;


  constructor() { }

  ngOnInit(): void {
    window.scroll(0,0);
  }

  hideThis(){
       this.hideForm = false;
  }

  hideThis1(){
    this.hideDiv = false;
  }

}
