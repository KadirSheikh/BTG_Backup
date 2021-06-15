import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TestimonialService {

  constructor(private _http: HttpClient) { }

  async getAllTest(){
    return await this._http.get(`${environment.apiUrl}api/testimonials/all`)
  }
  async getOneTest(id){
    return await this._http.get(`${environment.apiUrl}api/testimonials/all/${id}`)
  }
}
