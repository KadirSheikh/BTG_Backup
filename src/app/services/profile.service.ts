import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private _http: HttpClient) { }

  async getDataSheetHistory(id){
    return await this._http.get(`${environment.apiUrl}api/download-history/${id}`)
  }
}
