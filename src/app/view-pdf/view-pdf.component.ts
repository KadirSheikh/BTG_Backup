import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-view-pdf',
  templateUrl: './view-pdf.component.html',
  styleUrls: ['./view-pdf.component.css']
})
export class ViewPdfComponent implements OnInit {

  url:string;
  constructor(private _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    
    window.scroll(0,0);
    this._activatedRoute.queryParams.subscribe(params => {
      this.url = params['url'];
      console.log(this.url);
      
    })
  }

}
