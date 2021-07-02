import { Component, OnInit } from '@angular/core';
import { AboutsService } from 'src/app/services/abouts.service';
@Component({
  selector: 'app-export-control-compliance',
  templateUrl: './export-control-compliance.component.html',
  styleUrls: ['./export-control-compliance.component.css']
})
export class ExportControlComplianceComponent implements OnInit {
  exportData: any;

  constructor(private _about : AboutsService) { }

  ngOnInit(): void {
    window.scroll(0,0);
    this.getExport();

  }

  async getExport(){
    (await this._about.getExportControl()).subscribe((res:any) => {
      console.log(res.data);
      this.exportData = res.data;
      
    })
  }
  

}
