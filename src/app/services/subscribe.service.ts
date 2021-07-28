import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SubscribeService {

  constructor( private _http: HttpClient) { }

  async _subscribe(body:any) {
    return await this._http.post(`${environment.apiUrl}api/subscribe/add` , body)
  }
}
