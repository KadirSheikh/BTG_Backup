import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private _http: HttpClient) { }

  async getAllNews(){
    return await this._http.get(`${environment.apiUrl}api/newsandpressrelease/all`)
  }
  async getOneNews(id){
    return await this._http.get(`${environment.apiUrl}api/newsandpressrelease/all/${id}`)
  }

  

}
