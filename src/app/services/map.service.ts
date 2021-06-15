import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class MapService {

  constructor(private _http: HttpClient) { }

  async getMap() {
    return this._http.get(`${environment.apiUrl}api/map/all`)
  }
}
