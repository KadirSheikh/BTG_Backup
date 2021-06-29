import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DownloadsService {

  constructor(private _http: HttpClient) { }

  async dataSheetDownloads(body:any) {
    return this._http.post(`${environment.apiUrl}api/download-history/add` , body);
  }
}
