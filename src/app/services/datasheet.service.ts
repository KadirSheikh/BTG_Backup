import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class DatasheetService {

  constructor(private _http: HttpClient) { }

  async getCategories(id) {
    // console.log(id)
    return this._http.get(`${environment.apiUrl}api/datasheets/data-sheet-categories/${id}`)
  }

  async getDataSheets(pid, cid) {
    return this._http.get(`${environment.apiUrl}api/datasheets/data-sheet/${pid}/${cid}`)
  }
}
