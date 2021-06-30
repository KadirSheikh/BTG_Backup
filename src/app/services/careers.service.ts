import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CareersService {

  constructor(private _http: HttpClient) { }

  async getSingleCareer(id) {
    return this._http.get(`${environment.apiUrl}api/careers/all/${id}`)
  }

  async getCareer() {
    return this._http.get(`${environment.apiUrl}api/careers/all`)
  }
  async applyNow(body:any) {
    return this._http.post(`${environment.apiUrl}api/careers/apply-now` , body)
  }
  
}
