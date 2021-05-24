import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-export-control-compliance',
  templateUrl: './export-control-compliance.component.html',
  styleUrls: ['./export-control-compliance.component.css']
})
export class ExportControlComplianceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.scroll(0,0);
  }

}
