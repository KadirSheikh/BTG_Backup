import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private _http: HttpClient
  ) { }

  async getProduct(id) {
    return await this._http.get(`${environment.apiUrl}api/product/get/${id}`)
  }
}
