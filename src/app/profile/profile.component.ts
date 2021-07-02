import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ProfileService } from '../services/profile.service';





@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  displayedColumns: string[] = ['name', 'language', 'url'];
  dataSource:any = new MatTableDataSource();
  email: string;
  mobile: string;
  name: string;
  id: string;

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor(private _profile:ProfileService) { }

  ngOnInit(): void {
     this.email =  localStorage.getItem('email');
     this.mobile =  localStorage.getItem('mobile');
     this.name =  localStorage.getItem('name');
     this.id =  localStorage.getItem('id');

     this.getDataHistory(this.id);
  }

  async getDataHistory(id){
    (await this._profile.getDataSheetHistory(id)).subscribe((res:any) => {
      // console.log(res.data);
      let newArr = [];
      res.data.forEach(e => {
        console.log(e.sheetData);
        newArr.push(e.sheetData);
        
        
        
      });
      this.dataSource = newArr;
      
    })
  }

  

}
