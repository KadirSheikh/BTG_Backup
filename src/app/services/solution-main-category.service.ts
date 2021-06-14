import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class SolutionMainCategoryService {

  constructor(
    private _http: HttpClient
  ) { }

  async getSolutionMainCategory(id) {
    return await this._http.get(`${environment.apiUrl}api/product/get/${id}`)
  }
}
